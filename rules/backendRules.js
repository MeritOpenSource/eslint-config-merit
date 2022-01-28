module.exports = {
  extends: [
    "./commonRules",
    "plugin:@typescript-eslint/all",
    "plugin:functional/recommended",
    "prettier",
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
    "no-console": "error",
    "no-unused-vars": [
      "error",
      { argsIgnorePattern: "impossible", varsIgnorePattern: "React" },
    ],

    // Sorting
    "sort-keys-fix/sort-keys-fix": "error",
  },
};
