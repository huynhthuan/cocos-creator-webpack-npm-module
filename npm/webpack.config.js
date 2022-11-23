const path = require('path');

module.exports = {
    entry: './index.js',
    experiments: {
        outputModule: true,
    },
    output: {
        filename: 'npmModule.js',
        libraryTarget: 'commonjs-module',
        path: path.resolve(__dirname, 'build'),
    },
};
