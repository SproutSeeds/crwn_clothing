import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5z3uxO4YNbwVSWXz0t3UhWSDedAMNnVY",
  authDomain: "crwn-db-e61c2.firebaseapp.com",
  projectId: "crwn-db-e61c2",
  storageBucket: "crwn-db-e61c2.appspot.com",
  messagingSenderId: "32435676909",
  appId: "1:32435676909:web:9b8eb016a4dff929c30ee4",
  measurementId: "G-8K1WW4DGPB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
