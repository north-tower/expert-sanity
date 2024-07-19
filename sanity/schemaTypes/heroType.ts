import { defineField, defineType } from 'sanity';

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'Title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Title is required'),
    }),
    defineField({
        name: 'Description',
        title: 'Description',    
        type: 'string',
      validation: Rule => Rule.required().error('Desc is required'),
       
      }),
  ],
  preview: {
    select: {
      title: 'Title',
      subtitle: 'Description',
    },
  },
});
