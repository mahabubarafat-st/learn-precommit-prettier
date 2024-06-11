When working on a project, it’s important to maintain a consistent coding style and avoid errors that can cause bugs. One way to achieve this is by using linting and formatting tools like ESLint and Prettier. In this article, we’ll cover how to set up these tools with the help of Husky and lint-staged, which will enable us to run these tools automatically on commit.

Step 1: Install ESLint and Prettier

First, let’s install eslint and prettier-eslint as development dependencies in our project. You can use either npm or yarn to do this. Here’s an example using yarn:

yarn add --dev eslint prettier-eslint eslint-config-prettier eslint-plugin-prettier

or

 npm i eslint prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev

Step 2: Create ESLint Configuration

Next, let’s create an ESLint configuration file. You can do this by running:

yarn eslint --init

or,

npm init @eslint/config

This command will walk you through a series of questions to help set up your configuration. Here’s an example of how to answer these questions:

    How would you like to use ESLint? To check syntax and find problems
    What type of modules does your project use? JavaScript modules (import/export)
    Which framework does your project use? None of these
    Does your project use TypeScript? Yes
    Where does your code run? Node
    How would you like to define a style for your project? Use a popular style guide
    Which style guide do you want to follow? Standard
    What format do you want your config file to be in? JavaScript

This will create an .eslintrc.js file in the root directory of your project.

Step 3: Update your ESLint configuration

Update your ESLint configuration file (usually .eslintrc.json or .eslintrc.js) to include the parser and parserOptions properties. Here's an example configuration that includes these properties:

{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "@typescript-eslint/dot-notation": "error"
  }
}

Step 4: Create Prettier Configuration

Now let’s create a Prettier configuration file. Create a file named .prettierrc.js in the root directory of your project with the following content:

module.exports = {
  trailingComma: "es5",
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
};

You can adjust these options to fit your coding style preferences.

Step 5: Install Husky and lint-staged

Husky is a tool that allows us to set up Git hooks, which are scripts that run automatically when certain Git events occur. lint-staged is a tool that allows us to run ESLint and Prettier only on the files that are being committed.

Let’s install these tools as development dependencies:

yarn add --dev husky lint-staged

or

npm i  husky lint-staged --save-dev

Step 6: Set up Git Hooks

Now let’s set up the Git hooks with Husky. In your package.json file, add the following script:

{
  "scripts": {
    "prepare": "husky install",
    "format": "prettier-eslint --write \"src/**/*.ts\" \"test/**/*.ts\"",
  }
}

This script installs the husky Git hooks when you run `yarn prepare`.

Add the following configuration to your package.json file:

{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["yarn format"]
  }
}

This configuration tells lint-staged to run ESLint and Prettier on any JavaScript, TypeScript, or JSX files that are staged for a commit.

Finally, add a new Git hook by running the following command:

npx husky add .husky/pre-commit "yarn lint-staged"

This command adds a new pre-commit Git hook that runs the lint-staged script before every commit.