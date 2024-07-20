import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Title is required'),
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: Rule => Rule.required().error('Description is required'),
      }),
      defineField({
        name: 'href',
        title: 'href',
        type: 'string',
        validation: Rule => Rule.required().error('Description is required'),
      }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});
