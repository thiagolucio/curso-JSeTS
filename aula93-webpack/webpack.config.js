const path = require('path'); // CommonJS - trata os caminhos da aplicação

module.exports = {
  mode: 'production', // as opcoes sao production/ development
  entry: './src/index.js', // arquivo de entrada
  output: {
    /* 
      Abaixo o ".resolve" é quem resolver os paths (../../) a ser declarado (windows, mac, linux)
      - "(__dirname, 'public', 'assets', 'js')" que é o caminho e os nomes das pastas que devem ser 
      criadas. O "__dirname" é o variável que recebe o path da pasta atual para se referenciar.
      O arquivo bundle.js é gerado dentro da pasta js
    */
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    // o arquivo "bundle.js que é o que será exportado possui todos os arquivos compilados"
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  devtool: 'source-map', // faz o mapeamento do código
};
