const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/integration/**/*.feature",
    baseUrl: "http://hx-fe-qa.uksouth.cloudapp.azure.com:3000",
  },
});
