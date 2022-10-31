import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Project = {
  _id: string;
  title: string;
  image: string;
  link: string;
  github: string;
  categories: string[];
};

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;
};
