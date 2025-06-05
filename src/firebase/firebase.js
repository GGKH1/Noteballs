// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz2wNdCLE7jR8pEXq_8tupFWAp2z0PWCI",
  authDomain: "noteballs-7fcab.firebaseapp.com",
  projectId: "noteballs-7fcab",
  storageBucket: "noteballs-7fcab.firebasestorage.app",
  messagingSenderId: "876864282374",
  appId: "1:876864282374:web:a92581d1715f5c74008887",
  measurementId: "G-PH062RQSD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }