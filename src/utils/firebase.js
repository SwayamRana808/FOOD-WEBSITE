// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZTACx6SvFBn4hwaFsOm3dIXBEHh7sUQg",
  authDomain: "netflixgpt-a08fe.firebaseapp.com",
  projectId: "netflixgpt-a08fe",
  storageBucket: "netflixgpt-a08fe.appspot.com",
  messagingSenderId: "715056852193",
  appId: "1:715056852193:web:539fc3c14addc160ef5ba0",
  measurementId: "G-103FMZQV99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();