import { defineField, defineType } from 'sanity';

export const termsType = defineType({
  name: 'terms',
  title: 'Terms',
  type: 'document',
  fields: [
    defineField({
      name: 'leadText',
      title: 'Lead Text',
      type: 'string',
      validation: Rule => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'terms',
      title: 'Terms of service',
      type: 'string',
      validation: Rule => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'privacy',
      title: 'Privacy Policy',
      type: 'string',
      validation: Rule => Rule.required().error('Description is required'),
    }),
    defineField({
        name: 'user',
        title: 'User Conduct',
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
