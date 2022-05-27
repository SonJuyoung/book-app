import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoh_y-Tebr4pLjgtNId97FSFSMZpZFJ14",
    authDomain: "book-app-a5cdb.firebaseapp.com",
    projectId: "book-app-a5cdb",
    storageBucket: "book-app-a5cdb.appspot.com",
    messagingSenderId: "752760623839",
    appId: "1:752760623839:web:5402dba775b13393634f6a",
    measurementId: "G-2L6SYF0C2B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;