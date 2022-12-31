import firebase from "firebase/compat/app";
import "firebase/compat/functions";
import "firebase/compat/app-check";
import "firebase/compat/database";

const config = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_DOMAIN",
  databaseURL:
    "YOUR_FIREBASE_DATABASE_URL",
  projectId: "YOUR_FIREBASE_PROJECTID",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "YOUR_FIREBASE_SENDERID",
  appId: "YOUR_FIREBASE_APPID",
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase
      .appCheck()
      .activate("YOUR_FIREBASE_ACTIVATE_KEY", true);
  }
};

initFirebase();

export { firebase };
