import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyClPd-WGiaM7I4RcgWFt5WiL4_-Mk9EV2s",
    authDomain: "linkedinclone-98ff3.firebaseapp.com",
    projectId: "linkedinclone-98ff3",
    storageBucket: "linkedinclone-98ff3.appspot.com",
    messagingSenderId: "916839572514",
    appId: "1:916839572514:web:06aba3c2210bb79ba5d67b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;