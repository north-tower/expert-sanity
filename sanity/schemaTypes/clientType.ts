import { defineField, defineType } from 'sanity';

export const clientType = defineType({
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'ClientName',
      type: 'string',
      validation: Rule => Rule.required().error('Client Name is required'),
    }),
    defineField({
        name: 'mainImage',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          }
        ]
      }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'name',
    },
  },
});
