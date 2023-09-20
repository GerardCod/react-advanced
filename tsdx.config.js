const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),
      images({ include: ['**/*.png', '**/*.jpg']}),
      replace({ preventAssignment: true }),
      ...config.plugins,
    ];
    return config;
  },
};