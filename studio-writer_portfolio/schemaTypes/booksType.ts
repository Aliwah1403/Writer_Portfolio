import {defineField, defineType} from 'sanity'

export const booksType = defineType({
  name: 'books',
  title: 'Books',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required().error('Slug is required for the book URL'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) =>
        rule.required().min(50).max(500).error('Description must be between 50 and 500 characters'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publicationYear',
      title: 'Publication Year',
      type: 'number',
      validation: (rule) =>
        rule
          .required()
          .min(1900)
          .max(new Date().getFullYear() + 2)
          .error('Please enter a valid publication year'),
    }),
    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          {title: 'Literary Fiction', value: 'literary_fiction'},
        //   {title: 'Poetry', value: 'poetry'},
          {title: 'Short Stories', value: 'short_stories'},
          {title: 'Non-Fiction', value: 'non_fiction'},
          {title: 'Essay', value: 'essay'},
          {title: 'Memoir', value: 'memoir'},
        ],
      },
      validation: (rule) => rule.required().error('Please select a genre'),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Published', value: 'published'},
          {title: 'Coming Soon', value: 'upcoming'},
          {title: 'Draft', value: 'draft'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (rule) => rule.required().error('Please select a status'),
    }),
  ],
})
