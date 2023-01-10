const path = require('path')

module.exports = {
    entry: './src/database.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
};