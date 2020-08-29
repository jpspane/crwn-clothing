import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZMc_y4nrC43UAd4xiFzPW68OA4GZeu7Y",
  authDomain: "crwn-db-jpiw.firebaseapp.com",
  databaseURL: "https://crwn-db-jpiw.firebaseio.com",
  projectId: "crwn-db-jpiw",
  storageBucket: "crwn-db-jpiw.appspot.com",
  messagingSenderId: "742423008799",
  appId: "1:742423008799:web:7a9a3a3ec5b081bcebe72a",
  measurementId: "G-ENR4DH9KWX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
