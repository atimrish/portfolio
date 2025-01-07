import webpack from "webpack";
import path from "node:path";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import HtmlWebpackPlugin from "html-webpack-plugin";

interface IWebpackEnvironment {
    mode: webpack.Configuration['mode']
}

export default (env: IWebpackEnvironment): webpack.Configuration => {
    return {
        devtool: "inline-source-map",
        mode: env.mode || 'development',
        entry: path.resolve('src', 'index.tsx'),
        output: {
            path: path.resolve('dist'),
            filename: 'bundle-[contenthash:8].js',
            clean: true,
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve('index.html'),
            })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                "@src": path.resolve('src'),
            }
        },
        devServer: {
            port: 8000,
            open: true,
        }
    }
}
