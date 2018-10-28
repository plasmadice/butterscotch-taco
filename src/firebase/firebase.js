import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FB_KEY,
    authDomain: "butterscotch-taco.firebaseapp.com",
    databaseURL: "https://butterscotch-taco.firebaseio.com",
    projectId: "butterscotch-taco",
    storageBucket: "butterscotch-taco.appspot.com",
    messagingSenderId: "691723347431"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

// const db = firebase.database();
const db = firebase.firestore();
const auth = firebase.auth();

// const users = db.collection('users');
// users.doc('Haku').set({name: 'haku'});
// console.log(users);

export {
    db,
    auth,
};