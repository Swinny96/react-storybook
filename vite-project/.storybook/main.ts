import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-styling',
      options: {
        less: {
          // Require your Less preprocessor here
          implementation: require('less'),
        },
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
