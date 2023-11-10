import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8fR7nyZpe00gGHwkfL-38L63eAG6W7qc",
  authDomain: "calmosis-4a44c.firebaseapp.com",
  databaseURL: "https://calmosis-4a44c-default-rtdb.firebaseio.com",
  projectId: "calmosis-4a44c",
  storageBucket: "calmosis-4a44c.appspot.com",
  messagingSenderId: "518864201191",
  appId: "1:518864201191:web:4f8fe52557cb1f40f8c942",
  measurementId: "G-WC2HQ1B7KM"
};

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth, firebase };
