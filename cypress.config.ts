const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
       // e2e testing node events setup code
   config.defaultCommandTimeout= 10000;
   config.responseTimeout= 20000;
   config.pageLoadTimeout= 60000;
   return config;
    },
  },
});
