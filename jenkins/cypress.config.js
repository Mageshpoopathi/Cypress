const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
  screenshotOnRunFailure:true,
   setupNodeEvents(on, config) {
        require('@cypress/grep/src/plugin')(config);
      },
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
});
 