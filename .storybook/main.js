module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    { 
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-contexts/register',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y'
  ],
};
