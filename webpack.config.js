module.exports = {
  // Entry point for Webpack
  entry: __dirname + '/client/src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', 'tsx']
        },
        use: 'ts-loader',
        include: [ __dirname + '/client/src' ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/public'
  }
}