# Punk API exercise

Using the 🍺 [**Brewdog Punk API**](https://punkapi.com/documentation/v2) (no authentification required 👍) and ⚛[**React**](https://reactjs.org) + [**React Native Web**](http://necolas.github.io/react-native-web/docs), you will create a single page application with a simple form to search and display a beer list as you type. Feel also free to [personnalize](http://necolas.github.io/react-native-web/docs/?path=/docs/guides-style--page) your app with a kickass style ✨.

This repository is a boilerplate containing everything you need to realize this exercise: it's based on [**Create React App**](https://create-react-app.dev), the dependencies are already declared in the `package.json` and sensible default global styles as been set.

You can use **JavaScript** or **TypeScript** (pick the one you feel the most confident with). By default, the `src/JavaScript/App.js` file will be used as the entry point. To switch and use the `src/TypeScript/App.tsx` file instead, set the `USE_TYPESCRIPT` variable in `src/index.tsx` to `true`.

👉 Your code will be published on a GitHub repository.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Thanks for this very interesting exercise !!

What I didn't debug: 

The handleChange function is called on 3 TextInputs. <br />
When you search something in one of the inputs, the fetch function works, but the state is empty. Though, the state is filled on every next changes. <br />
Something about the life cycle escape me... ^^ <br />

The use of a `ScrollView` component seems to produce the equivalent of a componentWillMount and a componentWillReceiveProps methods...  Again a life cycle issue! <br />
I've planed to dive into the question. ;)

## The built app link

[http://192.168.1.250:5000](http://192.168.1.250:5000)
