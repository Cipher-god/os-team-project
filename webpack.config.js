import path from 'path';
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};