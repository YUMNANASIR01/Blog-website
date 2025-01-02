const postSchema = {
  title: 'Post',
  name: 'post',
  type: 'object',
  fields: [
    {
      name: 'post',
      title: 'Post',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Post id',
              name: 'postId',
              type: 'number',
            },
            {
              title: 'Post Title',
              name: 'postTitle',
              type: 'string',
            },
            {
              title: 'Post Image',
              name: 'postImage',
              type: 'image',
            },
            {
              title: 'Post Date',
              name: 'postDate',
              type: 'string',
            },
            {
              title: 'Post Read Time',
              name: 'postReadTime',
              type: 'string',
            },
            {
              title: 'Post Description',
              name: 'postDescription',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};


export default postSchema;


