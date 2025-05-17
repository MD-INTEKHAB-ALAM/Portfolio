module.exports = function override(config, env) {
  if (config.resolve) {
    if (!config.resolve.extensions.includes('.js')) {
      config.resolve.extensions.push('.js');
    }
  }
  return config;
};
