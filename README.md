# Auot Formating Code before commit
## Method -1 

Step 1: Install the necessary packages

First, you need to install Prettier, Husky, and lint-staged. Run the following command in your project directory:

sh

npm install --save-dev prettier husky lint-staged

Step 2: Configure Prettier

Create a .prettierrc file in the root of your project to define your Prettier configuration. For example:

json

{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80
}

Step 3: Add a script for Prettier in package.json

Add a script to format your code with Prettier. Open your package.json file and add the following under the scripts section:

json

"scripts": {
  "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}'"
}

Step 4: Configure lint-staged

Add a lint-staged configuration in your package.json to specify which files should be formatted with Prettier:

json

"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "prettier --write"
  ]
}

Step 5: Set up Husky to run lint-staged before every commit

Husky makes it easy to use githooks as if they are npm scripts. Initialize Husky and add a pre-commit hook:

sh

npx husky install

Then, add a pre-commit hook to run lint-staged. You can do this with Husky's command or by editing the husky configuration in your package.json.

Using Husky's command:

sh

npx husky add .husky/pre-commit "npx lint-staged"

Alternatively, add the following to your package.json:

json

"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}

Step 6: Verify the setup

To verify that everything is working correctly, make a change to a file in the src directory and then attempt to commit it. Prettier should automatically format the file before the commit is completed.
Example package.json

Here's an example of what your package.json might look like after these configurations:

json

{
  "name": "your-project",
  "version": "1.0.0",
  "scripts": {
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}'"
  },
  "devDependencies": {
    "husky": "^8.0.0",
    "lint-staged": "^13.0.0",
    "prettier": "^2.0.0"
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}

This setup will ensure that Prettier automatically formats your code every time you make a commit, maintaining code consistency across your project.