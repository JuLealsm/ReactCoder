// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBu5GlBjVxiDCeYl4X0Yt8FjhFLXhUECck",
    authDomain: "reajscoder.firebaseapp.com",
    projectId: "reajscoder",
    storageBucket: "reajscoder.firebasestorage.app",
    messagingSenderId: "295053207344",
    appId: "1:295053207344:web:ae59e214d201b7fb134af5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

export async function getItems(){
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach(doc=>console.log(`${doc.id}=> ${doc.data()}`))
}