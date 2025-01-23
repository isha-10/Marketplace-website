import { defineType, defineField } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "image1",
      title: "Image 1",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "paragraph1",
      title: "Paragraph 1",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paragraph2",
      title: "Paragraph 2",
      type: "text",
    }),
    defineField({
      name: "paragraph3",
      title: "Paragraph 3",
      type: "text",
    }),
    defineField({
      name: "paragraph4",
      title: "Paragraph 4",
      type: "text",
    }),
    defineField({
      name: "image2",
      title: "Image 2",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "paragraph5",
      title: "Paragraph 5",
      type: "text",
    }),
    defineField({
      name: "paragraph6",
      title: "Paragraph 6",
      type: "text",
    }),
    defineField({
      name: "paragraph7",
      title: "Paragraph 7",
      type: "text",
    }),
    defineField({
      name: "paragraph8",
      title: "Paragraph 8",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "heading", maxLength: 200 },
    }),
    defineField({
      name: "comments",
      title: "Comments",
      type: "reference",
      to: [{ type: "comment" }],
    }),
  ],
});
