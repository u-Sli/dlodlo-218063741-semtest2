// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUYxv0IOq4bCKMKhXLi-l3zc-7d2w4lcE",
  authDomain: "greenspace-d23f3.firebaseapp.com",
  projectId: "greenspace-d23f3",
  storageBucket: "greenspace-d23f3.firebasestorage.app",
  messagingSenderId: "861504099492",
  appId: "1:861504099492:web:d19ca4354d97d892ba4231"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);