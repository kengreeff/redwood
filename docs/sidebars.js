module.exports = {
  main: [
    {
      type: 'category',
      label: 'Docs',
      link: {
        type: 'generated-index',
        title: 'Docs',
        // description: '',
        slug: '/index',
      },
      className: 'docs-sidebar-category',
      items: [
        'a11y',
        'app-configuration-redwood-toml',
        'assets-and-files',
        'authentication',
        'builds',
        'cells',
        'cli-commands',
        'connection-pooling',
        'contributing-overview',
        'contributing-walkthrough',
        'cors',
        'custom-web-index',
        'data-migrations',
        'deploy',
        'directives',
        'environment-variables',
        'forms',
        'graphql',
        'local-postgres-setup',
        'logger',
        'mocking-graphql-requests',
        'prerender',
        'project-configuration-dev-test-build',
        'quick-start',
        'redwoodrecord',
        'router',
        'schema-relations',
        'security',
        'seo-head',
        'serverless-functions',
        'services',
        'storybook',
        'testing',
        'toast-notifications',
        'typescript',
        'webhooks',
        'webpack-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      className: 'tutorials-sidebar-category',
      items: [
        {
          Tutorial: [
            'tutorial/welcome-to-redwood',
            'tutorial/prerequisites',
            'tutorial/installation-starting-development',
            'tutorial/redwood-file-structure',
            'tutorial/our-first-page',
            'tutorial/a-second-page-and-a-link',
            'tutorial/layouts',
            'tutorial/getting-dynamic',
            'tutorial/cells',
            'tutorial/side-quest-how-redwood-works-with-data',
            'tutorial/routing-params',
            'tutorial/building-a-form',
            'tutorial/saving-data',
            'tutorial/authentication',
            'tutorial/deployment',
            'tutorial/wrapping-up',
          ],
        },
        {
          'Tutorial II': [
            'tutorial2/welcome-to-redwood-part-ii-redwoods-revenge',
            'tutorial2/prerequisites',
            'tutorial2/introduction-to-storybook',
            'tutorial2/our-first-story',
            'tutorial2/our-first-test',
            'tutorial2/building-a-component-the-redwood-way',
            'tutorial2/multiple-comments',
            'tutorial2/adding-comments-to-the-schema',
            'tutorial2/creating-a-comment-form',
            'tutorial2/role-based-authorization-control-rbac',
            'tutorial2/wrapping-up',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Cookbook',
      link: {
        type: 'generated-index',
        title: 'Cookbook',
        // description: '',
        slug: '/cookbook/index',
      },
      className: 'cookbook-sidebar-category',
      items: [
        {
          type: 'autogenerated',
          dirName: 'cookbook',
        },
      ],
    },
  ],
}
