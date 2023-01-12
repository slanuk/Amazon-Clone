// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg4aJ911UfmHDp5eJ_RuhoRUW9nA1RHa8",
  authDomain: "challenge-219a8.firebaseapp.com",
  projectId: "challenge-219a8",
  storageBucket: "challenge-219a8.appspot.com",
  messagingSenderId: "409345765146",
  appId: "1:409345765146:web:826a931ed940c2363fc6a3",
  measurementId: "G-L79NJ9PFLH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
