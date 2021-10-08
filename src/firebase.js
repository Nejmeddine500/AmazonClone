import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPYcr_yMUHZxRDlvVXUNYpLgUodaML6Cw",
  authDomain: "clone-e9978.firebaseapp.com",
  projectId: "clone-e9978",
  storageBucket: "clone-e9978.appspot.com",
  messagingSenderId: "88774576691",
  appId: "1:88774576691:web:98bc755b5a6e61f34d3146",
  measurementId: "G-E7MDESBEZV",
});

const auth = firebase.auth();

export { auth };
