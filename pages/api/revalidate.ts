import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  message: string
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    console.error("Must be a POST request")
    return res.status(401).json({ message: "Must be a POST request" })
  }

  try {
    const {
      body: { type, slug },
    } = req

    switch (type) {
      case "post":
        await res.revalidate(`/post/${slug}`)
        console.log(`Revalidated /post/${slug} with type ${type}`)
        return res.json({ message: `Revalidated "${type}" with slug "${slug}"` })
    }

    return res.json({ message: "No managed type" })
  } catch (err) {
    return res.status(500).send({ message: "Error revalidating" })
  }
}
