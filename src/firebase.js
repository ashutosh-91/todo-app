import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
console.log( process.env.REACT_APP_API_KEY);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAA3BL4ZK0PqgLE1efLiJj5dQ5OJ3fHDOw",
    authDomain: "todo-54e23.firebaseapp.com",
    projectId: "todo-54e23",
    storageBucket: "todo-54e23.appspot.com",
    messagingSenderId: "715593592174",
    appId: "1:715593592174:web:c29504fbb972ada2c1657f",
    measurementId: "G-V9CTMRMZ2W"
  });
const db=firebaseApp.firestore();

export default db;