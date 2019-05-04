export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5ccd7ff21ac52dbc9332a0d8',
                  name: 'Content Studio',
                  siteId: '9f0d05b8-cfe3-433a-91a6-b842a792d21f'
                },
                {
                  buildHookId: '5ccd7ff20575bb3368a9666a',
                  name: 'Portfolio Website',
                  siteId: '1b6cdcbc-a2c4-424c-b0a6-3cf061e90d69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simon-a-j/sanity-gatsby-portfolio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-ge2ttrwc.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent projects', order: '_createdAt desc', types: ['project'] },
      layout: { width: 'medium' }
    }
  ]
};
