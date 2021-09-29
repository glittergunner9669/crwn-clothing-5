// import firebase from "firebase/app";
// import 'firebase/firestore';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBqnK-diJlnC7Yp6SukfH590bjbgmW8PLc",
  authDomain: "crwn-db2-5c7bd.firebaseapp.com",
  projectId: "crwn-db2-5c7bd",
  storageBucket: "crwn-db2-5c7bd.appspot.com",
  messagingSenderId: "680325880202",
  appId: "1:680325880202:web:0220562c87315f311e1073",
  measurementId: "G-3X15FV1YS8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;