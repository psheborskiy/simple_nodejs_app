const path = require('path');

module.exports = {
    entry: "./js_app/index.js", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public/javascripts/'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/javascripts/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для js
            {
                test: /\.js|jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            }
        ]
    }
  }