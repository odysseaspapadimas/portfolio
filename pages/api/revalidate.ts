import { isValidRequest } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const secret = process.env.SANITY_SECRET as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const {
      body: { type, slug },
    } = req;

    console.log(req, "req");

    console.log(type, slug);

    await res.revalidate("/blog");
    await res.revalidate(`/blog/${slug}`);
    console.log(`Revalidated /post/${slug} with type ${type}`);
    return res.json({ message: `Revalidated "${type}" with slug "${slug}"` });
  } else {
    console.error("Must be a POST request");
    return res.status(401).json({ message: "Must be a POST request" });
  }
}
