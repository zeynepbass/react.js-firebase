import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDTGUyf4sIwlLsF3JeU3Z-vjgPLOUFKouQ",
    authDomain: "kisiler-d7648.firebaseapp.com",
    projectId: "kisiler-d7648",
    storageBucket: "kisiler-d7648.appspot.com",
    messagingSenderId: "864449621760",
    appId: "1:864449621760:web:e060cc5b3eb53804ca0de5",
    measurementId: "G-Y25SSJ12P9"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();


  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();


  export default db;
  export {auth,provider};