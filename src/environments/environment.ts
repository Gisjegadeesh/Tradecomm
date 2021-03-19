// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Local Path Link 
let serviePath_1 = "http://localhost:8081/api/v1/"
let serviePath_2 = "http://localhost:8081/api/v1/"
let BASE_PATH = "http://667667ca3f04.ngrok.io/"
let IMAGE_PATH = "http://localhost:8080/"


export const environment = {
  production: false,
  api_url: `${BASE_PATH}`,
  serviePath_1: `${serviePath_1}`,
  serviePath_2: `${serviePath_2}`,
  image_url:`${IMAGE_PATH}`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
