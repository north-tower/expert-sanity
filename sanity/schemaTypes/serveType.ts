import {defineField, defineType} from 'sanity'

export const serveType = defineType({
  name: 'serve',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
