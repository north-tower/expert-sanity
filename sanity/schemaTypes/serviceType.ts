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
      defineField({
        name: 'step1',
        title: 'step1',
        type: 'string',
        validation: Rule => Rule.required().error('Description is required'),
      }),
      defineField({
        name: 'step2',
        title: 'step2',
        type: 'string',
        validation: Rule => Rule.required().error('Description is required'),
      }),
      defineField({
        name: 'step3',
        title: 'step3',
        type: 'string',
        validation: Rule => Rule.required().error('Description is required'),
      }),
      defineField({
        name: 'step4',
        title: 'step4',
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
