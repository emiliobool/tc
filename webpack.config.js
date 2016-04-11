const path = require('path');
const base = {
  devtool: 'source-map',
  node: {
    __filename: false,
    __dirname: false
  },
  output: {
    path: path.join(__dirname, '_build'),
    filename: '[name]'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.(ttf|woff|woff2|png)/, loader: 'url'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.node/, loader: 'node'}
    ]
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
};

const main = Object.assign({}, base, {
  target: 'electron-main',
  entry: {
    'main.js': path.join(__dirname, 'src/main/main.js')
  }
});

const renderer = Object.assign({}, base, {
  target: 'electron-renderer',
  entry: {
    'renderer.js': path.join(__dirname, 'src/renderer/app.js')
  }
});

module.exports = [main, renderer];