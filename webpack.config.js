const path = require('path')

console.log('dirname : ', __dirname)
module.exports = {
    context: __dirname,
    entry: './functions/index.ts',
    output: {
        filename: 'worker.js',
        path: path.join(__dirname, 'dist'),
    },
    devtool: 'source-map',
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    // transpileOnly is useful to skip typescript checks occasionally:
                     transpileOnly: true,
                },
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
            }
        ],
    },
}
