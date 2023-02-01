const path = require('path')

module.exports = {
    entry: './src/index.js',//вхідний фвйл
    output: {
        path: path.resolve(__dirname, 'build'),//вихідна папка
        filename: 'bundle.js'//назва готового файлу у вихідній папці
    }, 
    devServer: {
        port: 4000,//кастомний порт
        open: true,//автоматично відкриває вкладку браузеру
        }
}