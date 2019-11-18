import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDB15tILV3K4H1rFPo9bg6A3GHXRunddqQ",
  authDomain: "nanzo-db.firebaseapp.com",
  databaseURL: "https://nanzo-db.firebaseio.com",
  projectId: "nanzo-db",
  storageBucket: "",
  messagingSenderId: "100445339176",
  appId: "1:100445339176:web:970befe2be2a0094cbff1d",
  measurementId: "G-681RJZC938"

};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebase;