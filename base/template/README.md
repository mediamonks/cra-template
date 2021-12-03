This project was bootstrapped with
[Create React App](https://github.com/mediamonks/create-react-app), using the
[MM base template](https://github.com/mediamonks/cra-template)

# Post setup

To use the deployment script add the following to your **package.json**:

```json
"config": {
    "host": "replace_me_with_your_host_name",
}
```

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br /> Open [http://localhost:3000](http://localhost:3000) to
view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br /> See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.<br /> It correctly bundles React in production
mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel,
ESLint, etc) right into your project so you have full control over them. All of the commands except
`eject` will still work, but they will point to the copied scripts so you can tweak them. At this
point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle
deployments, and you shouldn’t feel obligated to use this feature. However we understand that this
tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Content Security Policy ([CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP))

This application has been build with a [strict content security policy](https://csp.withgoogle.com/docs/strict-csp.html). To enforce this policy
add the following CSP header to the request response.

`Content-Security-Policy: script-src 'sha256-+OVgFCkyF2/rZ6qyfsNnIisCRI6dtMZw3w0Y4xiYagw=' 'strict-dynamic' https: 'unsafe-inline'; object-src 'none'; base-uri 'none';`
