import { defineField, defineType } from 'sanity';

export const careerType = defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    defineField({
      name: 'leadText',
      title: 'Lead Text',
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
        name: 'benefits',
        title: 'Benefits',
        type: 'object',
        fields: [
          {
            name: 'description',
            type: 'string',
            title: 'Description',
          },
          {
            name: 'benefit1',
            type: 'string',
            title: 'Benefit1',
          },
          {
            name: 'benefit2',
            type: 'string',
            title: 'Benefit2',
          },
          {
            name: 'benefit3',
            type: 'string',
            title: 'Benefit3',
          },
          {
            name: 'benefit4',
            type: 'string',
            title: 'Benefit4',
          },
          {
            name: 'benefit5',
            type: 'string',
            title: 'Benefit5',
          },
          {
            name: 'benefit6',
            type: 'string',
            title: 'Benefit6',
          },
        ],
      }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});
