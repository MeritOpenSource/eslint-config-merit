# ESLint config

These are settings for ESLint used by merit form214 app.

## What it does

This setup lints your typescript code based on practices. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
yarn add --dev eslint-config-merit
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file to extend below rules:

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
- Extend common rules
    ```js
    {
      'extends': [
        'merit/common'
      ]
    }
    ```
