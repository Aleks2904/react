const clientConfig = require('./cfg/webpack.client.config.js');
const serverConfig = require('./cfg/webpack.server.config');

module.exports = [
    clientConfig,
    serverConfig
];