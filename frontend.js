module.exports = {
    extends: [
      './rules/frontendRules.js',
    ].map(require.resolve),
    rules: {}
  };