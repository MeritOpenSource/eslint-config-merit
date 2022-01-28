module.exports = {
    extends: [
      './rules/backendRules.js',
    ].map(require.resolve)
  };