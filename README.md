# Express CRUD with File Storage -- Books API

Write an Express app, that uses a file for persistent storage.

## Expectations

* Use ES6 wherever possible (e.g. `let`, `const`, destructuring and fat arrow functions)
* Make regular commits
  * Make a commit every time you complete a feature
  * Give each commit a meaningful commit message
  * Don't expect the directions in this README to tell you went to commit
* All file operations must be asynchronous
* Your code must be perfectly indented.  If we can't read it, we aren't going to grade it.
* Work in your project directory at all times

## Part 1: Set up your npm/Express project

1. Fork and clone this repo
1. `touch app.js`
1. `npm init -y`
1. `npm install --save express`
1. `echo node_modules > .gitignore`
1. `git add .`
1. `git commit -m "Initial project setup"`

## Part : Set up nodemon and your npm scripts

1. `npm install --save-dev nodemon`
1. Open `package.json`
1. Inside `scripts`
  * add `"watch": "\`npm bin\`/nodemon"`
  * make sure that you have the trailing commas in the right places!
1. `npm run watch`

## Part : Create an Express server

1. Open `app.js`
1. Require Express
1. Initialize an `app`
1. Determine the port to use
  * The port to use could be passed in as the second command line argument
  * If not provided, default to 8000
1. Use `app.listen` to bind and listen for connections on the above port
1. Check that this works by running `nodemon app.js` in your directory
1. Git add, commit, push

## Part : Set up your database file

1. `mkdir db`
  * `db` is short for "database"
1. `cd db`
1. `touch seed.json`
  * this is where our initial data (i.e. "seed data") is stored
  * this file will be used to reset our database file whenever we want to start over
1. open `seed.json` and paste the following inside

    ```js
    [
      {
        "id": 1,
        "author": "Marijn Haverbeke",
        "title": "Eloquent JavaScript"
      },
      {
        "id": 2,
        "author": "Nick Morgan",
        "title": "JavaScript for Kids"
      },
      {
        "id": 3,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS",
      }
    ]
    ```

1. Go back to your project directory
1. Open `package.json`
1. Inside `scripts`
  * add `"reset": "cp seed.json data.json"`
  * make sure that you have the trailing commas in the right places!
1. `npm run reset`
1. `ls`
  * notice that there is now a `data.json` in the `db` directory
  * `db/data.json` is the file that we are going to modify
1. `echo db/data.json >> .gitignore`
  * database files are typically not checked into source control, because they
    can get large, have nothing to do with development, and might hold sensitive
    data
