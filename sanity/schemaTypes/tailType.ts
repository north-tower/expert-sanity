import { defineField, defineType } from 'sanity';

export const tailType = defineType({
  name: 'tail',
  title: 'Tail',
  type: 'document',
  fields: [
    defineField({
      name: 'description1',
      title: 'Description1',
      type: 'string',
      validation: Rule => Rule.required().error('Title is required'),
    }),
    defineField({
        name: 'description2',
        title: 'Description2',    
        type: 'string',
      validation: Rule => Rule.required().error('Desc is required'),
       
      }),
      defineField({
        name: 'description3',
        title: 'Description3',    
        type: 'string',
      validation: Rule => Rule.required().error('Desc is required'),
       
      }),
  ],
  preview: {
    select: {
      title: 'Who we are',
      subtitle: 'Description1',
    },
  },
});
