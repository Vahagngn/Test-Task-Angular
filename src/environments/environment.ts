// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from "./interface";

export const environment: Environment = {
  production: false,
  fbDbUrl: 'https://angular-testtask-default-rtdb.europe-west1.firebasedatabase.app',
  fbUrlAuth: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
   firebaseConfig: {
    apiKey: "AIzaSyC-q3SRS5y9T4vcQmEnlejAtfeMHHqtTik",
    authDomain: "angular-testtask.firebaseapp.com",
    projectId: "angular-testtask",
    storageBucket: "angular-testtask.appspot.com",
    messagingSenderId: "4073420405",
    appId: "1:4073420405:web:4154da39189b1594eb2a3c"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
