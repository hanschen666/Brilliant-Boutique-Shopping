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
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
