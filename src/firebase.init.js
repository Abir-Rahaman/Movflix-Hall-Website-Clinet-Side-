// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeI4fvFiHv1v_3er-1Pn7fLqbJzgtr2bY",
  authDomain: "movflix-application.firebaseapp.com",
  projectId: "movflix-application",
  storageBucket: "movflix-application.appspot.com",
  messagingSenderId: "551408851237",
  appId: "1:551408851237:web:b07c57e3264281a6dce2cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


