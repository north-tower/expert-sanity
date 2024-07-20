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
      title: 'Step 1',
      type: 'object',  // Changed type to 'object'
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'description',  // New field added
          type: 'string',
          title: 'Description',
        }
      ]
    }),
    defineField({
      name: 'step2',
      title: 'Step 2',
      type: 'object',  // Changed type to 'object'
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'description',  // New field added
          type: 'string',
          title: 'Description',
        }
      ]
    }),
    defineField({
      name: 'step3',
      title: 'Step 3',
      type: 'object',  // Changed type to 'object'
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'description',  // New field added
          type: 'string',
          title: 'Description',
        }
      ]
    }),
    defineField({
      name: 'step4',
      title: 'Step 4',
      type: 'object',  // Changed type to 'object'
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'description',  // New field added
          type: 'string',
          title: 'Description',
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});
