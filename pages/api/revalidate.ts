import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
};

const secret = process.env.SANITY_SECRET as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
    const body = await readBody(req); // Read the body into a string
    if (!isValidSignature(body, signature, secret)) {
      console.log("Invalid signature");
      res.status(401).json({ success: false, message: "Invalid signature" });
      return;
    }

    const jsonBody = JSON.parse(body);

    const { type, slug } = jsonBody;

    console.log(req, "req");

    console.log(type, slug);

    await res.revalidate("/blog");
    await res.revalidate(`/blog/${slug}`);
    console.log(`Revalidated /post/${slug} with type ${type}`);
    return res.json({
      success: true,
      message: `Revalidated "${type}" with slug "${slug}"`,
    });
  } else {
    
    console.error("Must be a POST request");
    return res
      .status(401)
      .json({ success: false, message: "Must be a POST request" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readBody(readable: NextApiRequest) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
