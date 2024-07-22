import { defineField, defineType } from 'sanity';

export const valueType = defineType({
  name: 'value',
  title: 'Value',
  type: 'document',
  fields: [
    defineField({
      name: 'whoWeAre',
      title: 'Who We Are',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        },
      ],
    }),
    defineField({
      name: 'aboutUs',
      title: 'About Us',
      type: 'string',
      validation: Rule => Rule.required().error('About Us is required'),
    }),
    defineField({
      name: 'ourValues',
      title: 'Our Values',
      type: 'object',
      fields: [
        {
          name: 'leadText',
          type: 'string',
          title: 'Lead Text',
        },
        {
          name: 'value1',
          title: 'Value 1',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
          ],
        },
        {
            name: 'value2',
            title: 'Value 2',
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Title',
              },
              {
                name: 'description',
                type: 'string',
                title: 'Description',
              },
            ],
          },
          {
            name: 'value3',
            title: 'Value 3',
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Title',
              },
              {
                name: 'description',
                type: 'string',
                title: 'Description',
              },
            ],
          },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'whoWeAre.title',
      subtitle: 'whoWeAre.description',
    },
  },
});
