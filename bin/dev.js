const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const webpackDevMiddleweare = require('webpack-dev-middleware');
const webpackHotMiddleweare = require('webpack-hot-middleware');
const express = require('express');

const hmrServer = express();
const clientComplier = webpack(webpackClientConfig)

hmrServer.use(webpackDevMiddleweare(clientComplier, {
   publicPath: webpackClientConfig.output.publicPath,
   serverSideRender: true,
   noInfo: true,
   watchOptions: {
       ignore: /dist/,
   },
   writeToDisk: true,
   stats: 'errors-only',
}));

hmrServer.use(webpackHotMiddleweare(clientComplier, {
    path: '/static/__webpack_hmr',
}))

hmrServer.listen(3001, () => {
    console.log('HMR server successful started');
})

const complier = webpack(webpackServerConfig);


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