// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9hXizCP0c1xk-ix9y4_aqG5mr_awZMaM",
    authDomain: "house-marketplace-app-a8224.firebaseapp.com",
    projectId: "house-marketplace-app-a8224",
    storageBucket: "house-marketplace-app-a8224.appspot.com",
    messagingSenderId: "547537174702",
    appId: "1:547537174702:web:dea00a1737f550bc59ad3f"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()