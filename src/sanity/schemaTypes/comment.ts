
  import { Rule } from 'sanity'

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'post',
      title: 'Blog Post',
      type: 'reference',
      to: [{ type: 'blog' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
    },
  ],
}
