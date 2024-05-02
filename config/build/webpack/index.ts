import webpack from 'webpack';
import "webpack-dev-server";

import {devServer} from "./devServer";
import {loaders} from "./loaders";
import {plugins} from "./plugins";

import {BuildOptions} from "../types/webpack";

export function buildWebpack(options: BuildOptions): webpack.Configuration | any {
    const isDev = options.mode === "development";

    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: plugins(options),
        module: {
            rules: loaders(options)
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                "@": options.paths.src
            }
        },
        devtool: isDev && "inline-source-map",
        devServer: isDev && devServer(options),
    };
}