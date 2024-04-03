This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

We are using latest react native cli

so run command:

npx react-native start

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

Either Open xcode and run app in simulator (metro should pick it up)
or select run ios in metro

```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. HomeScreen holds Quiz and Result screen holds result ui
3. First UI will be place holder ui to start quiz
4. once you start the quiz then it will show first question
5. Questionas are hardcoded for now, it can come from api as well.
6. Once you select any answer you will see Next button which will take you to next question
7. Once yopu are on last question, you will see Finish button which will take you to result screen with score


To run the test:
npm run test --watchAll

To Generate Coverage:
npm run test a -- --coverage

Current code coverage: 92%



```
