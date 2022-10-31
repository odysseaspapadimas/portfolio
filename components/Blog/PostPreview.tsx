import { NextLink } from "@mantine/next";
import Image from "next/image";
import dayjs from "dayjs";
import { useMantineTheme } from "@mantine/core";
import { useState } from "react";

type Props = {
    title: string;
    createdAt: Date;
    slug: string;
    description: string;
}
const PostPreview = ({ title, createdAt, slug, description }: Props) => {
    const [hover, setHover] = useState(false);
    const theme = useMantineTheme();
    return (
        <div className="my-4 rounded-md flex flex-col space-y-3">
            <NextLink href={`/blog/${slug}`} className="relative">
                {hover && <div className="absolute -left-4 text-2xl font-bold" style={{ color: theme.colors.blue[8] }}>|</div>}
                <h2 onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="font-bold text-3xl underline underline-offset-4">{title}</h2>
            </NextLink>
            <p className="text-sm">{dayjs(createdAt).format("MMMM DD, YYYY")} &bull; 3 min read</p>
            <p>{description}</p>
        </div>
    )
}
export default PostPreview