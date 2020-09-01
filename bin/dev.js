const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const complier = webpack(webpackConfig);


complier.run((err) => {
    if(err) {
        console.log('ошибка: ', err)
    }

    complier.watch({}, (err) => {
        if(err) {
            console.log('ошибка: ', err)
        }
    })

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client')
        ]
    })
})