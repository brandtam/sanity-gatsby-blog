export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eea3aaf0915a7613d17dee7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k245yi4n',
                  apiId: 'ba5fa25a-533f-4c67-8631-c84dfca3f2a7'
                },
                {
                  buildHookId: '5eea3aaf6f1ef82a6264e56c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2qc8xy1b',
                  apiId: '32acd86f-01bb-4496-ac18-88dac086e088'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brandtam/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2qc8xy1b.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
