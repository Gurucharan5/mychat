import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBql8xEVNT7ZCgSfDiwKqHbsZiLlXo6zEE",
    authDomain: "mychat-build.firebaseapp.com",
    projectId: "mychat-build",
    storageBucket: "mychat-build.appspot.com",
    messagingSenderId: "231021736240",
    appId: "1:231021736240:web:f846a06e30a42f0ee018f5"
  };
let app;

if(firebase.apps.length === 0){
app = firebase.initializeApp(firebaseConfig);
}else {
  app= firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth};
