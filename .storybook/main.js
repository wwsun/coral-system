const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../docs/**/*.stories.tsx', '../docs/**/*.stories.tsx'],

  addons: ['@storybook/addon-docs'],

  babel: async (config) => {
    config.plugins.push('babel-plugin-styled-components');
    return config;
  },

  webpack: async (config) => {
    if (config.mode === 'production') {
      config.devtool = false;
    }

    if (config.resolve.plugins === null) {
      config.resolve.plugins = [];
    }

    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  },
};
