export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cd67a2a07ee45dc2b569b3a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-hyper-studio',
                  apiId: 'aba09567-d8b2-4fd7-8d36-d332e8f0bed6'
                },
                {
                  buildHookId: '5cd67a2a5ba08effda22656c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-hyper',
                  apiId: '59c9a87d-dd54-4890-9641-ded320e21369'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ouipierreange/sanity-gatsby-hyper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-hyper.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
