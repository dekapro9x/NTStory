module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        '@assets': './src/assets',
        '@component': './src/components',
        '@const': './src/const',
        '@hooks': './src/hooks',
        '@lib-custom': './src/lib-custom',
        '@navigations': './src/navigations',
        '@redux': './src/redux',
        '@screens': './src/screens',
        '@services': './src/services',
        '@utils': './src/utils'
      }
    }]
  ]
};
