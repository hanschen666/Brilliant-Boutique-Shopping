import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const config = {
  apiKey: "AIzaSyCy3EKB8wAhEzH0_rZM18J73Kfzptqcmf0",
  authDomain: "gold-db.firebaseapp.com",
  projectId: "gold-db",
  storageBucket: "gold-db.appspot.com",
  messagingSenderId: "605576067205",
  appId: "1:605576067205:web:3558bea03ca3af9901d1ec",
  measurementId: "G-P2PDYBR516",
};

export const createUserProfileDocuments = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
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
    } catch (err) {
      console.error("err creating user", err.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
