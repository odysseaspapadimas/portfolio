import { GetStaticProps } from "next"
import Image from "next/image"
import sanity from "../lib/sanity"

const blog = ({ posts }: { posts: any }) => {
    return (
        <div>

            <div className="flex justify-between items-end mt-6">
                <h1 className="font-bold">Blog</h1>

                <span>0 posts</span>
            </div>

            {!posts.length && (
                <div className="flex justify-between mt-8">
                    <p>Posts will show up here...when there are any...</p>
                    <Image src="https://media4.giphy.com/media/fnDY3C9MKukcER71r7/giphy.gif?cid=ecf05e47p649csfxb0ualo5kef044jenud8p4qoftel8gi96&rid=giphy.gif&ct=g" alt="Admit it, you're lost gif" width={150} height={150}/>
                </div>
            )}

        </div>
    )
}
export default blog

export const getStaticProps: GetStaticProps = async () => {
    const posts = await sanity.fetch(`*[_type == "post"] | order(_createdAt desc) {_id, title, slug, "image":image.asset->url, categories}`);

    return {
        props: {
            posts,
        },
    }
}