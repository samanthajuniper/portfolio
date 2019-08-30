This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Project directory: cd into the inner-most nested "portfolio" file

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



### Building the App from scratch

## 1) `npm i create-react-app`

## 2) `npx create-react-app appName`
    example: npx create-react-app portfolio

## From this point on, make sure that you are in your root app directory. You should be able to see the node module folder on this level. 

## 3) Install your css framework
    In my case, I chose to use Bulma. Per Bulma's documentation, run `npm i bulma-start`.

    This command installs Bulma and all of it's dependencies. If you choose to run `npm i bulma` instead, you'll have to track down all of the dependencies and install them on your own. 

## 4) Add test code to App.js in the body tags
    Make sure to add some bulma classes so you can test if they work

## 5) Add the app.sass fil, configure bulma variables, and import specific pieces of bulma

## 6) Start App
    npm i
    npm start



# Styling
    Both Bulma and node-sass need to be installed
    1) In src/components create a folder called CSS
    2) Move the app.sass and app.css files to this folder
    3) In app.sass import the necessary bulma pieces from node modules
    3) Create individual sass files for each component using this syntax: _About.scss
    4) Be sure to import each component's sass file into app.sass. This is important so that any variables defined in app.sass are available to other stylesheets. Also, this ensures that the styles for all the pages will be applied without having to import multiple stylesheets in each component. We can just import app.sass into app.js.
    