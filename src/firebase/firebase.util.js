import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB52HYr0yjPiQHDybg81gLKORBOHrV87f8",
    authDomain: "apparel-ecommerce.firebaseapp.com",
    databaseURL: "https://apparel-ecommerce.firebaseio.com",
    projectId: "apparel-ecommerce",
    storageBucket: "apparel-ecommerce.appspot.com",
    messagingSenderId: "324751629601",
    appId: "1:324751629601:web:5054c4e239671cf28c7260"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;