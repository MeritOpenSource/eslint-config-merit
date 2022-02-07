# ESLint config

These are settings for ESLint used by merit form214 app.

## What it does

This setup lints your typescript code based on practices. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
yarn add --dev eslint-config-merit
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file to extend rules:

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

3. You can extend other rules too

- Extend other rules 
    ```js
    {
      'extends': [
        'merit/frontend',
        'airbnb-typescript'
      ]
    }
    ```
    Note:- order matters when extending rules , if same rule is present in two eslint config later override the former rule 

4. You can also override a rule that is defined in any extended config file
- Override rules
    ```js
    {
        'extends': [
          'merit/frontend'
        ],
        'rules': {
          "no-console": "off"
        }
    }
