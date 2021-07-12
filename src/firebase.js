import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA5E1X5aBvLKreOFoSX94M-p_Pt11a8UCk",
//   authDomain: "message-37f4d.firebaseapp.com",
//   databaseURL: "https://message-37f4d.firebaseio.com",
//   projectId: "message-37f4d",
//   storageBucket: "message-37f4d.appspot.com",
//   messagingSenderId: "193937085043",
//   appId: "1:193937085043:web:15f13b020f9255cb615006",
//   measurementId: "G-6Q39ZVF4ZG"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5E1X5aBvLKreOFoSX94M-p_Pt11a8UCk",
  authDomain: "message-37f4d.firebaseapp.com",
  databaseURL: "https://message-37f4d.firebaseio.com",
  projectId: "message-37f4d",
  storageBucket: "message-37f4d.appspot.com",
  messagingSenderId: "193937085043",
  appId: "1:193937085043:web:15f13b020f9255cb615006",
  measurementId: "G-6Q39ZVF4ZG"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
