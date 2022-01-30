const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = async ({ config, mode }) => {
    config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
            extensions: config.resolve.extensions,
        }),
    ];

    config.module.rules = [
        ...(config.module.rules || []),
        {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        },
    ];

    return config;
};
