// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvYUMRgewDyXCY-L2v29AjN1H68X8QYS4",
  authDomain: "private-route-f6046.firebaseapp.com",
  projectId: "private-route-f6046",
  storageBucket: "private-route-f6046.firebasestorage.app",
  messagingSenderId: "1040377752314",
  appId: "1:1040377752314:web:3e1e3b47a6576def5e7743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;