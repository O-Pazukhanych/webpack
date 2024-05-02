import path from "path";
import {buildWebpack} from "./config/build/webpack";

import EnvConfiguration from "./src/types/env";
import {BuildPaths} from "./config/build/types/webpack";

export default (env: EnvConfiguration) => {
    const buildPaths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    }

    return buildWebpack({
        mode: env?.mode || "development",
        port: env?.port || 3000,
        paths: buildPaths,
    });
}