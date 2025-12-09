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
                            eager: false,
                        },
                        'react-dom': {
                            singleton: true,
                            requiredVersion: false,
                            eager: false,
                        },
                        '@radix-ui/react-slot': {
                            singleton: true,
                            requiredVersion: false,
                        },
                        'class-variance-authority': {
                            singleton: true,
                            requiredVersion: false,
                        },
                        'clsx': {
                            singleton: true,
                            requiredVersion: false,
                        },
                        'tailwind-merge': {
                            singleton: true,
                            requiredVersion: false,
                        },
                    },
                    extraOptions: {
                        automaticAsyncBoundary: true,
                        exposePages: false,
                    },
                })
            );
        }

        return config;
    },
}

module.exports = nextConfig;