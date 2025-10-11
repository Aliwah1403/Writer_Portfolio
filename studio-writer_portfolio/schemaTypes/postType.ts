import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
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
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Article', value: 'article'},
          {title: 'Academic Paper', value: 'academic_paper'},
          {title: 'Essay', value: 'essay'},
          {title: 'Short Story', value: 'short_story'},
          {title: 'Memoir', value: 'memoir'},
          {title: 'Travelogue', value: 'travelogue'},
          {title: 'Review', value: 'review'},
          {title: 'Interview', value: 'interview'},
          {title: 'Book Review', value: 'book_review'},
          {title: 'News', value: 'news'},
          {title: 'Opinion', value: 'opinion'},
          {title: 'Op-Ed', value: 'op_ed'},
          {title: 'Letter', value: 'letter'},
          {title: 'Announcement', value: 'announcement'},
        ],
      },
      validation: (rule) => rule.required().error('Please select a category'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      options: {
        dateFormat: 'MMMM Do YYYY',
      },
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (in minutes)',
      type: 'number',
      validation: (rule) =>
        rule.required().min(1).max(60).error('Please enter time it takes to read the post'),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      title: 'Post Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      publishedAt: 'publishedAt',
    },
    prepare({title, category, publishedAt}) {
      return {
        title: `${title} - ${category}`,
        subtitle: new Date(publishedAt).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
      }
    },
  },
})
