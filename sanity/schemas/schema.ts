import type { SchemaTypeDefinition } from "sanity"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      type: "document",
      name: "project",
      title: "Project",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: { source: "title" },
        },
        {
          name: "shortDescription",
          title: "Short Description",
          type: "text",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "repoLink",
          title: "Repo Link",
          type: "url",
        },
        {
          name: "liveDemoLink",
          title: "Live Demo Link",
          type: "url",
        },
        {
          name: "category",
          title: "Category",
          type: "string",
          options: {
            list: ["web dev", "deep learning", "mobile dev", "other"],
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "tech",
          title: "Tech",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "mainImage",
          title: "Main Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "images",
          title: "Images",
          type: "array",
          of: [
            {
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
