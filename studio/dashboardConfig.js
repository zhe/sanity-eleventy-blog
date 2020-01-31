export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e33db22c43c80c3c9ae72da',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-975xu2t7',
                  apiId: 'a9492aec-1311-4c4e-a16e-737386d1c003'
                },
                {
                  buildHookId: '5e33db2279dfa83c1fb05801',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-p3266gnh',
                  apiId: '4f4a40b7-c006-451a-8962-ed5f90df9b50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zhe/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-p3266gnh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
