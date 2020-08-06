import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAa7sVBCRpzzweBlfxCfRBGU6msUoJk0Z8",
  authDomain: "tinder-clone-4d045.firebaseapp.com",
  databaseURL: "https://tinder-clone-4d045.firebaseio.com",
  projectId: "tinder-clone-4d045",
  storageBucket: "tinder-clone-4d045.appspot.com",
  messagingSenderId: "943514601452",
  appId: "1:943514601452:web:a800bbcadc0be382e3e2c9",
  measurementId: "G-P9J9NWCCMH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
