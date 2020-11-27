module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  // NOTE, storybook merges it's own webpack config and CRA's through `@storybook/preset-create-react-app`
  // this means that it also appends the `react-refresh` config, so you don't have to specify it here
};
