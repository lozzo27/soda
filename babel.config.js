module.exports = {
  comments: false,
  presets: [
    [
      '@babel/preset-env',
    ],
    [
      '@babel/preset-react',
    ],
  ],
  env: {
    node: {
      sourceMaps: 'both',
      sourceType: 'unambiguous',
      sourceFileName: 'index.js',
    },
  },
  ignore: ['node_modules'],
};