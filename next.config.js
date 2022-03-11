const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const {
  PHASE_PRODUCTION_SERVER, PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const getWebpackConfig = require('./webpackConfig');


const defaultEnv = {
  api: {
    baseUrl: 'http://localhost:3000/api/',
  },
};

const prodEnv = {
  ...defaultEnv,
};

module.exports = (phase) => {
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './assets/styles/variables.less'), 'utf8'),
  );

  // fix: prevents error when .less files are required by node
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = () => {};
  }

  let env = defaultEnv;

  if ([PHASE_PRODUCTION_SERVER, PHASE_PRODUCTION_BUILD].includes(phase)) {
    env = prodEnv;
  }

  let config = {
    webpack: getWebpackConfig,
    publicRuntimeConfig: env,
  };

  config = withLess({
    ...config,
    lessLoaderOptions: {
      modifyVars: themeVariables,
      javascriptEnabled: true,
    },
  });
  return config;
};
