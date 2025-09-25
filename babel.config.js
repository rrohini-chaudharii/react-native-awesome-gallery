module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "module:metro-react-native-babel-preset",
      "@babel/preset-typescript"
    ],
    plugins: [
      // any extra plugins you require, e.g. optional chaining, nullish
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator"
    ]
  };
};
