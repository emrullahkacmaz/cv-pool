// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCspH0LQLwCRhUJ0ra9KQoNi6RaMlHx7cA",
  authDomain: "tein-2b059.firebaseapp.com",
  projectId: "tein-2b059",
  storageBucket: "tein-2b059.appspot.com",
  messagingSenderId: "90698694422",
  appId: "1:90698694422:web:49cb7376f0c95603695a37"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}


const auth = firebase.auth();
const fireStore = firebase.firestore();
export { auth, fireStore };
