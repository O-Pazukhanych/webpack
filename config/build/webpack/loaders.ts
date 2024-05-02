import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "../types/webpack";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function loaders(options: BuildOptions)  {
    const isDev = options.mode === "development";

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };
    const svgLoader = {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }
    const scssLoader = {
        test: /\.s[ac]ss?$/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ],
    };
    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: !isDev,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    })
                }
            }
        ]
    };

    return [
        assetsLoader,
        svgLoader,
        scssLoader,
        tsLoader
    ]
}