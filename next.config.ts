const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config, options) {
        const { isServer } = options;

        if (!isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'masterPage',
                    filename: 'static/chunks/remoteEntry.js',
                    remotes: {
                        ccdPage: `ccdPage@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
                    },
                    shared: {
                        react: {
                            singleton: true,
                            requiredVersion: false,
                        },
                        'react-dom': {
                            singleton: true,
                            requiredVersion: false,
                        },
                    },
                    extraOptions: {
                        automaticAsyncBoundary: true,
                        loadRemoteStyles: true, // IMPORTANT
                    },
                })
            );
        }

        return config;
    },
}

module.exports = nextConfig;