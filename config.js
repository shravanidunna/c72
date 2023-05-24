import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaFEbuh07t8l0yN3u6Kp2N93FUvfN8uDg",
  authDomain: "willy-ee84f.firebaseapp.com",
  projectId: "willy-ee84f",
  storageBucket: "willy-ee84f.appspot.com",
  messagingSenderId: "736156828609",
  appId: "1:736156828609:web:0e00b2f7f02ce8a195e540"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
