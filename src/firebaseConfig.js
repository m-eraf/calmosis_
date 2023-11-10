import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCxmVFpcBq40PCq2yr6EArmX5WfgYKddlY",
  authDomain: "otp-verify-55e6a.firebaseapp.com",
  projectId: "otp-verify-55e6a",
  storageBucket: "otp-verify-55e6a.appspot.com",
  messagingSenderId: "461399382630",
  appId: "1:461399382630:web:da81a28eeb338e7c03eba7",
  measurementId: "G-0FQQMFSVGV"
};

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth, firebase };
