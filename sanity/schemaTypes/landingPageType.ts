import { defineField, defineType } from 'sanity';

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      validation: Rule => Rule.required().error('Main Title is required'),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      validation: Rule => Rule.required().error('Sub Title is required'),
    }),
    defineField({
      name: 'leadText',
      title: 'Lead Text',
      type: 'text',
      validation: Rule => Rule.required().error('Lead Text is required'),
    }),
  ],
  preview: {
    select: {
      title: 'mainTitle',
      subtitle: 'subTitle',
    },
  },
});
