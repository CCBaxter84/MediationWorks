module.exports = {
  // Entry point for Webpack
  entry: __dirname + '/client/src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|svg|ico)$/i,
        use: "url-loader"
      },
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