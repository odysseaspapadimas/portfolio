import { GetStaticProps } from "next";
import Head from "next/head";
import { getPaths, getPostBySlug } from "../../lib/queries";
import { Post } from "../../lib/types";
import { PortableText } from "@portabletext/react"
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypePrism from 'rehype-prism-plus'
import rehypeHighlight from "rehype-highlight";
import remarkGfm from 'remark-gfm';

type Props = {
    post: Post
}
const BlogPost = ({ post }: Props) => {

    return (
        <>
            <Head>
                <title>{post.title} - Odysseas Papadimas</title>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
                ></link>
            </Head>
            <div>
                <h1>{post.title}</h1>

                <div className="prose dark:prose-invert prose-pre:bg-slate-800 max-w-full">
                    <MDXRemote {...post.content} />
                </div>
            </div>
        </>
    )
}
export default BlogPost

export const getStaticPaths = async () => {
    const paths = await getPaths();

    console.log(paths, 'paths');
    return {
        paths: paths.map((slug: any) => ({ params: { slug } })),
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    const post = await getPostBySlug(params?.slug as string);

    console.log(post, 'post');
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
                })
            }
        },
    };
}
