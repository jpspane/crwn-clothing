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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // Add to firestore

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error("Error create user", error);
    }
  }

  return userRef;
};

export default firebase;
