// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
const kijiji = require("kijiji-scraper");
 
// Scrape using returned promise
kijiji.Ad.Get("<Kijiji ad URL>").then(function(ad) {
    // Use the ad object
    console.log(ad.title);
}).catch(console.error);
 
// Scrape using optional callback paramater
kijiji.Ad.Get("<Kijiji ad URL>", function(err, ad) {
    if (!err) {
        // Use the ad object
        console.log(ad.title);
    }
});