const landingPageSchema = {
  title: 'Landing Page',
  name: 'landingPage',
  type: 'document',
  fields: [
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'post' },
      ],
    },
  ],
};

export default landingPageSchema;
