import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyCLSekkBeP3BCqj8s2rp6Yp50cGShJfKnI",
     authDomain: "signal-with-react-native-2d8c1.firebaseapp.com",
     projectId: "signal-with-react-native-2d8c1",
     storageBucket: "signal-with-react-native-2d8c1.appspot.com",
     messagingSenderId: "143604175586",
     appId: "1:143604175586:web:1f57dd8cdf105f8f4604bb",
     measurementId: "G-5YTWMH2R76"
};

let app;

if (firebase.apps.length === 0) {
     app = firebase.initializeApp(firebaseConfig);
} else {
     app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

