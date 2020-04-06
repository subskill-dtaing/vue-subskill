import * as firebase from "firebase";

const configOptions = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "vue-firebase-auth-2802d.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-2802d.firebaseio.com",
  projectId: "vue-formations",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const FirebaseInit = () => {
  return firebase.initializeApp(configOptions);
};

export default FirebaseInit;
