const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/database.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
};