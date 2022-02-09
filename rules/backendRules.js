module.exports = {
  extends: [
    "plugin:@typescript-eslint/all",
    "plugin:functional/recommended",
    "prettier",
    "./commonRules",
  ],
  plugins: [
    "@typescript-eslint",
    "functional",
    "prettier",
    "sort-imports-es6-autofix",
    "sort-keys-fix",
    "sort-destructure-keys",
  ],
  rules: {
    // Sorting
    "sort-keys-fix/sort-keys-fix": "error",
  },
};
