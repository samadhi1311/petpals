import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQ4BL2SzJruiZvnxHW5UrHuxhQZyYL6J0",
    authDomain: "petpals-59c6e.firebaseapp.com",
    projectId: "petpals-59c6e",
    storageBucket: "petpals-59c6e.appspot.com",
    messagingSenderId: "356010122809",
    appId: "1:356010122809:web:f9d163500c6eb7a23977e8",
    measurementId: "G-N0CMXBG89K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);