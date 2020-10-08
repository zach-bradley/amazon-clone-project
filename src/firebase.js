import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDm57_AOYEXJftMPfgVJgucj0BfEWoPgHU",
  authDomain: "challenge-56a4e.firebaseapp.com",
  databaseURL: "https://challenge-56a4e.firebaseio.com",
  projectId: "challenge-56a4e",
  storageBucket: "challenge-56a4e.appspot.com",
  messagingSenderId: "495163792335",
  appId: "1:495163792335:web:8905893818cff1bc1790ba",
  measurementId: "G-8LSF2K0MF9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };