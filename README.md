# Project: Evaluate URLs with NLP

## Introduction
Natural Language Processing is a thing now.  According to Wikipedia definition:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

This app sends requests to the Aylien API (https://api.aylien.com/api/v1/sentiments)  endpoint to analyse text contents. It will extract a writer's sentiment from posts and articles on websites and output the author's feelings and emotions: 
whether the tone is positive, neutral, or positive; or whether the text is subjective that is reflects author's opinion, or objective (expreses a fact).

## Technologies

This app was created using the following:
* Node.js
* Express
* JavaScript
* SASS / CSS for styling
* HTML for the framework
* Aylien natural language processor
* Jest for testing

## What I have done

- Setting up Webpack
- Setup and used Sass for styling
- Setup and loaded Webpack Loaders and Plugins
- Adding to layout and page designs
- Minified js and styles in the production environment
- setup and used process environment
- Added Service workers for offline services
- Using the Aylien API to enable requests to external urls and NLP analysis
- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission works, making sure to also handle error responses if the user input does not match API requirements

## Prerequisite

* A computer
* A little knowledge of how to download and install technologies on a computer via terminal or command line

## Launch - How to run the app
this app has been deployed on [Heroku](https://www.heroku.com/)
### As a private server
To run this app as a private server, the user will need to make the following installations:
* Download and install node.js from: https://nodejs.org/en/download/
* open the gitbash/ powershell in the root directory

Install the server
* $ npm install

Run the production config
* $ npm run build-prod

Run a code test
* $ npm test

Start the server
* $ npm run start

Run the development config
* $ npm run build-dev

## Sources:
- Udacity Frontend Developer nanodegree course content
- Download and install node.js from: https://nodejs.org/en/download/
- Signup for the Aylien API key [Aylien-API-Key] (https://developer.aylien.com/signup)
- Get the Aylien NLP API and get started at: https://docs.aylien.com/textapi/#getting-started
- Validation at:  https://jestjs.io/docs/en/expect#tobedefined
- URL Validation, Stackoverflow: https://stackoverflow.com/questions/1410311/regular-expression-for-url-validation-in-javascript
- Runtime error fix: jony89@ https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined
- Github: https://github.com/facebook/jest/issues/8166
- Youtube: https://youtu.be/VruEWq0t8pI

## Project status:
This project has been completed and deployed on [Heroku](https://www.heroku.com/)