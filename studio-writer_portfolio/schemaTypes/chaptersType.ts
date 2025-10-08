import {defineField, defineType} from 'sanity'

export const chaptersType = defineType({
  name: 'chapter',
  title: 'Chapter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Chapter Title',
      type: 'string',
      validation: (rule) =>
        rule.required().min(3).max(100).error('Chapter title must be between 3 and 100 characters'),
    }),
    defineField({
      name: 'chapterNumber',
      title: 'Chapter Number',
      type: 'number',
      validation: (rule) =>
        rule.required().min(1).integer().error('Chapter number must be a positive integer'),
    }),
    defineField({
      name: 'book',
      title: 'Book',
      type: 'reference',
      to: [{type: 'books'}],
      validation: (rule) => rule.required().error('Please link this chapter to a book'),
    }),
    defineField({
      name: 'content',
      title: 'Chapter Content',
      type: 'array',
      of: [
        {
          type: 'block',
          //   styles: [
          //     {title: 'Normal', value: 'normal'},
          //     {title: 'H2', value: 'h2'},
          //     {title: 'H3', value: 'h3'},
          //     {title: 'Quote', value: 'blockquote'},
          //   ],
          //   marks: {
          //     decorators: [
          //       {title: 'Strong', value: 'strong'},
          //       {title: 'Emphasis', value: 'em'},
          //     ],
          //   },
        },
      ],
      validation: (rule) => rule.required().min(1).error('Chapter content cannot be empty'),
    }),
  ],
  orderings: [
    {
      title: 'Chapter Number, Ascending',
      name: 'chapterNumberAsc',
      by: [{field: 'chapterNumber', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      chapterNumber: 'chapterNumber',
      bookTitle: 'book.title',
    },
    prepare({title, chapterNumber, bookTitle}) {
      return {
        title: `Ch. ${chapterNumber}: ${title}`,
        subtitle: bookTitle || 'No book linked',
      }
    },
  },
})
