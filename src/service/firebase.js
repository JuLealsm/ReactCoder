// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCNnggnNNOXAuRJIzrjdnLvehNq7ki4jw",
    authDomain: "reajs-coder.firebaseapp.com",
    projectId: "reajs-coder",
    storageBucket: "reajs-coder.firebasestorage.app",
    messagingSenderId: "1012406820820",
    appId: "1:1012406820820:web:86b0c561c5b8ee549c0041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()