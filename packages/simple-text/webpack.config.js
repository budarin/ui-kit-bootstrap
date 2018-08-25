var path = require('path');
module.exports = {
  cache: true,
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve('./lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        include: path.resolve('./src'),
        exclude: [path.resolve('./node_modules'), path.resolve('./lib')],
        use: {
            loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};