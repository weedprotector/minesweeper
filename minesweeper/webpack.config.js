const path = require('path');
module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    mode: 'development',
    watch: true
}