import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBp7qwcNuhlNhDXYaOtfkkuJVYg2pgShsI",
  authDomain: "calmosis.firebaseapp.com",
  projectId: "calmosis",
  storageBucket: "calmosis.appspot.com",
  messagingSenderId: "161899219066",
  appId: "1:161899219066:web:6f463d116d67de5b09d3c3",
  measurementId: "G-ELWJWBD8SS"
};

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth, firebase };
