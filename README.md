# React Native ja modernit testausmenetelmät 2020

## Prerequisites

- You should have working React Native environment already set up. If not follow steps in their [official documentation](https://reactnative.dev/docs/environment-setup)
- Install [Detox](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md)

## Running the project

- Run `yarn` in the project root to install dependencies

```sh
yarn start # to start metro bundler
yarn ios # to start run in iOS simulator
yarn android # to start project in Android device or emulator
```

### Running unit tests

```sh
yarn test
```

### Running End to end tests

First we need to build iOS app binary

```sh
yarn run detox build --configuration ios
```

After we have the binary in our `ios/build/Build` directory we can run our E2E tests

```sh
yarn run detox test --configuration ios
```

## Additional stuff

In `src/DetailsScreen.tsx` component there is use example of data validation using `io-ts`.
