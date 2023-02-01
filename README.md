# webpack-test
1) npm init -y
2) npm install webpack webpack-cli --save-dev
3) create index.html in ~ / create dir src -> index.js
4) in ~ create webpack.config.js ->    const path = require('path')
                                        module.exports = {
                                            mode: "development",
                                            entry: './src/index.js',
                                            output: {
                                                path: path.resolve(__dirname, 'build'),
                                                filename: 'my-bundle.js'
                                            }
                                        }
in package.json change scripts:
                                "dev": "webpack --mode=development,
                                "prod": "webpack --mode=production"

підключення server -> npm install webpack-dev-server --save-dev / 
в scripts ставимо "dev": "webpack-dev-server --mode=development"