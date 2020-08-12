import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCf5tJgEi55A9SdE2xNoPP13CKJ2ItEezc",
  authDomain: "react-slack-17a4d.firebaseapp.com",
  databaseURL: "https://react-slack-17a4d.firebaseio.com",
  projectId: "react-slack-17a4d",
  storageBucket: "react-slack-17a4d.appspot.com",
  messagingSenderId: "971015950681",
  appId: "1:971015950681:web:38154d81e021e29b14bc48",
  measurementId: "G-8GQXNVPPWJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
