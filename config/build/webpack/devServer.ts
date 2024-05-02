import {Configuration} from "webpack-dev-server";
import {BuildOptions} from "../types/webpack";

export function devServer(options: BuildOptions): Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}