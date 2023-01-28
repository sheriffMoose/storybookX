module.exports = {
  framework: '@storybook/angular',
  stories: [
      //
      '../stories/**/*.@(md|html)',
      '../src/**/*.stories.mdx',
      '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: [
      {
          from: '../.docs',
          to: '/docs',
      },
  ],
  addons: [
      //
      '@storybook-extras/preset',
      '@storybook/addon-essentials',
  ],
  docs: {
      defaultName: 'Overview',
      autodocs: true,
  },
  extras: {
      swagger: {
          openapiURL: 'https://petstore.swagger.io/v2/swagger.json',
      },
      markdown: {
          mdExclude: [/\.component\.html$/],
          titles: {
              '../stories/markdown-main-js.md': 'Markdown/main.js',
          },
      },
  },
};
