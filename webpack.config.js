const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = (env, argv) => {
    console.log('argv.mode:', argv.mode)

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.js',
            publicPath: '/'
        },
        devServer: {
            static: path.resolve(__dirname, 'build'),
            compress: true,
            port: 3000,
        },
        devtool: 'source-map',

        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './public/index.html',
                filename: './index.html',
            }),
            
        ],
    }
}

module.exports = config