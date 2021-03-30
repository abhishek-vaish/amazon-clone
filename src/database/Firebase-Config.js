import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC9MJwPaMzOXXSXWcmzLH96Woargp8rIYY",
  authDomain: "clone-challenge-936f3.firebaseapp.com",
  projectId: "clone-challenge-936f3",
  storageBucket: "clone-challenge-936f3.appspot.com",
  messagingSenderId: "452234880879",
  appId: "1:452234880879:web:248c1e1bca9ac03ed66a9a",
  measurementId: "G-NGLRP1EE9D",
});

const db = firebaseConfig.firestore();

export { db };
