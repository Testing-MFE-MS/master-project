// const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     webpack(config, options) {
//         const { isServer } = options;

//         if (!isServer) {
//             config.plugins.push(
//                 new NextFederationPlugin({
//                     name: 'masterPage',
//                     filename: 'static/chunks/remoteEntry.js',
//                     remotes: {
//                         ccdPage: `ccdPage@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
//                     },
//                     shared: {
//                         react: {
//                             singleton: true,
//                             requiredVersion: false,
//                         },
//                         'react-dom': {
//                             singleton: true,
//                             requiredVersion: false,
//                         },
//                     },
//                     extraOptions: {
//                         automaticAsyncBoundary: true,
//                         loadRemoteStyles: true, // IMPORTANT
//                     },
//                 })
//             );
//         }

//         return config;
//     },
// }

// module.exports = nextConfig;


import type { NextConfig } from "next";
import type { Configuration, WebpackPluginInstance } from "webpack";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(
    config: Configuration,
    options: { isServer: boolean }
  ): Configuration {
    if (!options.isServer) {
      config.plugins = config.plugins || [];

      config.plugins.push(
  new NextFederationPlugin({
    name: "masterPage",
    filename: "static/chunks/remoteEntry.js",
    remotes: {
      ccdPage: "ccdPage@http://localhost:3001/_next/static/chunks/remoteEntry.js",
    },
    shared: {
      react: { singleton: true, requiredVersion: false },
      "react-dom": { singleton: true, requiredVersion: false },
    },
    extraOptions: {
      automaticAsyncBoundary: true,
      loadRemoteStyles: true,
    } as any, // ✅ cast to any
  }) as unknown as WebpackPluginInstance
);

    }

    return config;
  },
};

export default nextConfig;
