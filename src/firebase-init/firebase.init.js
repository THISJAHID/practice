// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPB70WaYU_An_LE6dmO5EKGdZLhm46zCk",
    authDomain: "simple-react-8b594.firebaseapp.com",
    projectId: "simple-react-8b594",
    storageBucket: "simple-react-8b594.appspot.com",
    messagingSenderId: "194713909498",
    appId: "1:194713909498:web:b6fee82d306c84a4f13143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;