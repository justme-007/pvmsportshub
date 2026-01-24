import { defineType, defineField } from 'sanity'

const club = defineType({
  name: 'club',
  title: 'Football Club',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Club Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Club Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export default club