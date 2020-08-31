export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5f4d03f935dfbb4377a683ab',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ncs8mkyu',
                  apiId: '75b002dc-d33e-4fe0-aed5-aff6c5c2baa9'
                },
                {
                  buildHookId: '5f4d03fa35dfbb433ba68c13',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-4qgxgz2q',
                  apiId: '32219276-6f01-4eff-984a-487079dad838'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Traf333/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-4qgxgz2q.netlify.app', category: 'apps'}
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
