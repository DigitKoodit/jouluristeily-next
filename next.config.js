const withTypescript = require('@zeit/next-typescript');
const withOffline = require('next-offline');
const webpack = require('webpack');
require('dotenv').config();

module.exports = withTypescript(
  withOffline({
    webpack: config => {
      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});

      config.plugins.push(new webpack.DefinePlugin(env));
      return config;
    },
    publicRuntimeConfig: {
      token: process.env.CONTENTFUL_TOKEN,
      space: process.env.CONTENTFUL_SPACE_ID,
      gaid: process.env.GA_ID
    }
  })
);
