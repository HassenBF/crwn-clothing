import firebase from "firebase/app";
import 'firebase/firebase-firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDkFhGKNgAiS_4f5hqcxIjBYa0wIIpHi88",
    authDomain: "crwn-clothing-db-7e4ff.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-7e4ff.firebaseio.com",
    projectId: "crwn-clothing-db-7e4ff",
    storageBucket: "crwn-clothing-db-7e4ff.appspot.com",
    messagingSenderId: "242451740199",
    appId: "1:242451740199:web:d1cb7f1c30a7fd42f9c002"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =  firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// This triggers the google popup whenever we use the google signup
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
