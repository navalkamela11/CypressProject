const { defineConfig } = require("cypress");

module.exports = defineConfig({
 e2e: {
   setupNodeEvents(on, config) {
     on('before:browser:launch', (browser = {}, launchOptions) => {
       if (browser.name === 'chrome' ) { // You can target other browsers as well
         launchOptions.args.push('--disable-gpu');
         launchOptions.args.push('--no-sandbox');
         launchOptions.args.push('--disable-dev-shm-usage');
         launchOptions.args.push('--headless=new'); // Use new headless mode
         launchOptions.args.push('--window-size=1920,1080');
         launchOptions.args.push('--disable-extensions');
       }
       return launchOptions;
     });
   },
 },
});