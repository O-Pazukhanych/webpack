import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import {BuildOptions} from "../types/webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function plugins(options: BuildOptions) {
    const isDev = options.mode === "development";

    const plugins: any[] = [
        new HtmlWebpackPlugin({template: options.paths.html}),
        new ForkTsCheckerWebpackPlugin()
    ]

    if (isDev) {
        plugins.push(
            new webpack.ProgressPlugin(),
            new ReactRefreshPlugin()
        )
    }

    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css"
            })
        )
    }

    return plugins;
}