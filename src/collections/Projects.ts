import type { CollectionConfig } from "payload";
import { Media } from "./Media";

type MediaS = {};

const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      label: "Image",
      relationTo: "media",
      required: true,
    },
    {
      name: "link",
      type: "text",
      label: "Link",
      required: true,
    },
    {
      name: "github",
      type: "text",
      label: "GitHub",
      required: false,
    },
    {
      name: "categories",
      type: "array",
      label: "Categories",
      minRows: 1,
      required: true,
      fields: [
        {
          name: "category",
          type: "text",
          label: "Category",
        },
      ],
    },
  ],
};

export default Projects;
