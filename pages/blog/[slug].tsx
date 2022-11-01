import { GetStaticProps } from "next";
import Head from "next/head";
import { getPaths, getPostBySlug } from "../../lib/queries";
import { Post } from "../../lib/types";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm';
import dayjs from "dayjs";
import readingTime from 'reading-time'

type Props = {
    post: Post & { readingTime: string }
}
const BlogPost = ({ post }: Props) => {

    return (
        <>
            <Head>
                <title>{post.title} - Odysseas Papadimas</title>
            </Head>
            <div className="py-4">
                <h1 className="font-bold leading-9">{post.title}</h1>
                <h3 className="text-xl dark:text-gray-200 text-gray-900 my-2">{post.description}</h3>

                <p className="my-6">By <span className="font-bold">Odysseas Papadimas</span> &bull; {dayjs(post._createdAt).format("MMMM DD, YYYY")} &bull; {post.readingTime} </p>

                <div className="prose dark:prose-invert max-w-full">
                    <MDXRemote {...post.content} />
                </div>
            </div>
        </>
    )
}
export default BlogPost

export const getStaticPaths = async () => {
    const paths = await getPaths();

    return {
        paths: paths.map((slug: any) => ({ params: { slug } })),
        fallback: true
    };
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    const post = await getPostBySlug(params?.slug as string);

    return {
        props: {
            post: {
                ...post,
                content: await serialize(post.content, {
                    mdxOptions: {
                        remarkPlugins: [remarkGfm],
                        rehypePlugins: [rehypePrism],
                        format: "mdx"
                    }
                }),
                readingTime: readingTime(post.content).text
            }
        },
    };
}
