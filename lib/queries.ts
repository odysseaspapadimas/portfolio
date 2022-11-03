import sanity from "./sanity";

const projectFields = `
    _id,
    title,
    github,
    link, 
    "image":image.asset->url, 
    categories
`;

const postFields = `
    _id,
    _createdAt,
    title,
    slug,
    description,
    content,
`;

export const getAllProjects = async () => {
  const data = await sanity.fetch(`*[_type == "project"] | order(index asc) {${projectFields}}`);
  return data;
};

export const getPaths = async () => {
  const data = await sanity.fetch(
    `  *[_type == "post" && defined(slug.current)][].slug.current`
  );
  return data;
};

export const getPosts = async () => {
  const data = await sanity.fetch(`*[_type == "post"] | order(_createdAt desc) {${postFields}}`);
  return data;
};

export const getPostBySlug = async (slug : string) => {
  const data = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug]{
        ${postFields}
        }`,
    { slug }
  );
  return data[0];
};
