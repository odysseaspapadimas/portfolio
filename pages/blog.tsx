import { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import PostPreview from "../components/Blog/PostPreview"
import { getPosts } from "../lib/queries"
import sanity from "../lib/sanity"
import { Post } from "../lib/types"

const stayTunedGif = "https://media4.giphy.com/media/fnDY3C9MKukcER71r7/giphy.gif?cid=ecf05e47p649csfxb0ualo5kef044jenud8p4qoftel8gi96&rid=giphy.gif&ct=g"

const blog = ({ posts }: { posts: Post[] }) => {
    return (
        <>
        <Head>
            <title>Blog - Odysseas Papadimas</title>
        </Head>
            <div>
                <div className="flex justify-between items-end mt-6">
                    <h1 className="font-bold">Blog</h1>

                    <span>{posts.length ?? 0} {posts.length === 1 ? "post" : "posts"}</span>
                </div>

                {posts.length === 0 ? (
                    <div className="flex justify-between mt-8">
                        <p>Posts will show up here...when there are any...</p>
                        <Image src={stayTunedGif} alt="Admit it, you're lost gif" width={150} height={150} />
                    </div>
                ) : (
                    <div>
                        {posts.map((post) => (
                            <PostPreview key={post._id} createdAt={post._createdAt} title={post.title} slug={post.slug.current} description={post.description} />
                        ))}
                    </div>
                )}

            </div>
        </>
    )
}
export default blog

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts();

    return {
        props: {
            posts,
        },
    }
}