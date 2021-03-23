import firebase from "firebase";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAb6IdmkFaFaEdTIIb061guXCt7mrVlpBg",
  authDomain: "hr-management-43f28.firebaseapp.com",
  databaseURL:
    "https://hr-management-43f28-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hr-management-43f28",
  storageBucket: "hr-management-43f28.appspot.com",
  messagingSenderId: "914800497396",
  appId: "1:914800497396:web:8d21adbf26ca1cbe9fc4a1",
  measurementId: "G-1PZK81JLSH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();
export { auth, provider, firestore, database };
