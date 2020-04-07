import * as firebase from "firebase";

const configOptions = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "https://vue-formations.firebaseapp.com",
  databaseURL: "https://vue-formations.firebaseio.com",
  projectId: "vue-formations",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const FirebaseInit = () => {
  return firebase.initializeApp(configOptions);
};

export default FirebaseInit;
