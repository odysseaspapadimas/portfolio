export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "github",
      title: "Github",
      type: "url",
    },
    {
        name: "link",
        title: "Link",
        type: "url",
    },
    {
        name: "image",
        title: "Image",
        type: "image",
    },
    {
        name: "categories",
        title: "Categories",
        type: "array",
        of: [{type: "string"}],
        options: {
            layout: "tags",
        },
    }
  ],
};
