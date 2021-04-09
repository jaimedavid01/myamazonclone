// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOVZ26xYb4y1CyAbxgUvaWr15QdG8nfDE",
    authDomain: "clone-eaa45.firebaseapp.com",
    projectId: "clone-eaa45",
    storageBucket: "clone-eaa45.appspot.com",
    messagingSenderId: "683041259047",
    appId: "1:683041259047:web:e2b1d072248689b79a1802",
    measurementId: "G-VJ1TJ8QJJZ"
  };

  const firebaseAPP = firebase.initializeApp(firebaseConfig);

  const db = firebaseAPP.firestore();
  const auth = firebase.auth();

  export { db, auth };