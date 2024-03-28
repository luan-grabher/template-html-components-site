const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída para os arquivos buildados
    filename: 'index.js' // Nome do arquivo JavaScript buildado
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Regra para arquivos CSS
        use: ['style-loader', 'css-loader'] // Carrega os estilos CSS
      },
      {
        test: /\.html$/, // Regra para arquivos HTML
        use: ['html-loader'] // Carrega os arquivos HTML
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Arquivo HTML de origem
      filename: 'index.html' // Nome do arquivo HTML buildado
    })
  ]
};
