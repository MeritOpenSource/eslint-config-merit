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
    "react",
    "react-hooks",
    "sort-imports-es6-autofix",
    "sort-keys-fix",
    "sort-destructure-keys",
  ],
  rules: {
    "no-unused-vars": "off",

    // React
    "react/button-has-type": "error",
    "react/destructuring-assignment": "error",
    "react/display-name": "off",
    "react/jsx-sort-props": "error",
    "react/prop-types": "off",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-multi-comp": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-typos": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/require-optimization": "error",
    "react/self-closing-comp": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-fragments": "error",
    "react/jsx-pascal-case": "error",

    // React-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    // Sorting
    "sort-keys-fix/sort-keys-fix": ["error", "asc", { natural: true }],
  },
};
