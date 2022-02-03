module.exports = {
    extends: [
      './rules/commonRules.js',
    ].map(require.resolve)
  };