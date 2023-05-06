// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  apiWeatherUrl: 'apiweather',
  apiKeyWeather: 'g32bqtd86vuevsuakwzqwplxkayynltw',
  apiSecretWeather: 'xfypm0hocmqjphsgwyocg1cswlsvmkao',
  sunriseAndSunsetAPI: 'apisunrset',
  googleMapsApiKey: 'AIzaSyD-PwMQM3byfbOWUszIxR7wANmaBGoa30w',
  termAndConditionsUrl: 'https://simetstorage.blob.core.windows.net/frontend-document/CONVENIO DE AYUDA MUTUA- APELL- V3 DEF.pdf'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
