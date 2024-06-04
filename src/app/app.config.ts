import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArUBElVy3QhRVCixonhUHU1LCvQK2fdhE",
  authDomain: "modangularhelloworld.firebaseapp.com",
  projectId: "modangularhelloworld",
  storageBucket: "modangularhelloworld.appspot.com",
  messagingSenderId: "1037283634757",
  appId: "1:1037283634757:web:95c28c0ee06c4021073d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
