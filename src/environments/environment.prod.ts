import {Environment} from "./interface";

export const environment: Environment = {
  production: true,
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
