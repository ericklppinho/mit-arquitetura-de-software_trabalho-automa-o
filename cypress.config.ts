import { defineConfig } from "cypress";

import { devServer } from "@cypress/webpack-dev-server";
import * as Webpack from "webpack";

import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import * as webpackPreprocessor from "@cypress/webpack-preprocessor";

const webpackConfig = (
  cypressConfig: Cypress.PluginConfigOptions
): Webpack.Configuration => {
  return {
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "ts-loader",
              options: { transpileOnly: true },
            },
          ],
        },
        {
          test: /\.feature$/,
          use: [
            {
              loader: "@badeball/cypress-cucumber-preprocessor/webpack",
              options: cypressConfig,
            },
          ],
        },
      ],
    },
  };
};

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpackPreprocessor({
      webpackOptions: {
        resolve: {
          extensions: [".js", ".ts"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  component: {
    specPattern: "cypress/components/**/*.feature",
    supportFile: false,
    devServer(devServerConfig) {

      return devServer({
        ...devServerConfig,
        framework: "react",
        webpackConfig: webpackConfig(devServerConfig.cypressConfig),
      });
    },
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});
