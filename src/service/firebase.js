
import 'firebase/auth';
import "firebase/firestore";
import firebase from  "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDPG-tbAwwYnTvPnmuH7Jz4e2gTu5gE-xE",
    authDomain: "marimekko-app.firebaseapp.com",
    projectId: "marimekko-app",
    storageBucket: "marimekko-app.appspot.com",
    messagingSenderId: "611188723016",
    appId: "1:611188723016:web:435dad9f5a8d6b7877f77d",
    measurementId: "G-BQJCJ0PZ52"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;