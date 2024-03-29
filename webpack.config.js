const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, "dist"), // Diretório de saída para os arquivos buildados
    filename: "bundle.js", // Nome do arquivo JavaScript buildado
  },
  module: {
    rules: [
      {
        test: /\.html$/, // Regra para arquivos HTML
        use: [
          path.resolve(__dirname, "./html-loader.js"), // Caminho para o seu carregador
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Arquivo HTML de origem
      filename: "index.html", // Nome do arquivo HTML buildado
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/**/*.css",
          to: "styles/[name].[ext]",
        },
        {
          from: "public",
          to: "",
        },
      ],
    }),
  ],
};
