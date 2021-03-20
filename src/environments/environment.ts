// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Local Path Link 

//General Service
let BASE_PATH = "http://95ed440fe873.ngrok.io/";

// Invoice Service Url
let serviePath_1 ="http://95ed440fe873.ngrok.io/";

// Biddind Service Url
let serviePath_2 ="http://2a088c457b03.ngrok.io/";

//Dashboard  Service Url
let dboardServerPath1 ="http://dboardServPath1/";
let dboardServerPath2 ="http://dboardServPath2/";
let dboardServerPath3 ="http://dboardServPath3/";
let dboardServerPath4 ="http://dboardServPath4/";
let dboardServerPath5 ="http://dboardServPath5/";
let dboardServerPath6 ="http://dboardServPath6/";

export const environment = {
  production: false,
  api_url: `${BASE_PATH}`,
  serviePath_1: `${serviePath_1}`,
  serviePath_2: `${serviePath_2}`,
  dboardServerPath1: `${dboardServerPath1}`,
  dboardServerPath2: `${dboardServerPath2}`,
  dboardServerPath3: `${dboardServerPath3}`,
  dboardServerPath4: `${dboardServerPath4}`,
  dboardServerPath5: `${dboardServerPath5}`,
  dboardServerPath6: `${dboardServerPath6}`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
