# ESLint config

Shareable eslint config for use in Merit apps.

## Installing

1. In your project folder, install this config and it's required pieces. Pick a commit hash from head of master. We'll get this on a proper package registry soon:

```
yarn add --dev github:MeritOpenSource/eslint-config-merit#{commit-hash} eslint@^7.32.0 typescript
```

2. Now, create `.eslintrc.js` file to extend rules:

- Extend frontend rules
    ```js
    {
      'extends': [
        'merit/frontend'
      ]
    }
    ```
- Extend backend rules
    ```js
    {
      'extends': [
        'merit/backend'
      ]
    }
    ```

3. Due to ESLint shareable configs being painful, we strongly recommend the Rush Stack eslint-patch.

- Install: `yarn add --dev @rushstack/eslint-patch`

- Use the eslint-patch, make your `.eslintrc.js` file look something like:
```
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [ "merit/frontend" ],  // <---- put your profile string here
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  settings: {
    react: {
      "version": "16.9" // <---- update this, or drop section entirely for backend ruleset
    }
  }
};
```
