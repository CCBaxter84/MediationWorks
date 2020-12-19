module.exports = {
  // Entry point for Webpack
  entry: __dirname + '/client/src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
        include: [ __dirname + '/client/src' ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/public'
  }
}