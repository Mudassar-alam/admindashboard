
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyC_72Ma5S1Jh10c2OD1jnbzw2GUTFAFq4M",
  authDomain: "admin-dashboard-123.firebaseapp.com",
  projectId: "admin-dashboard-123",
  storageBucket: "admin-dashboard-123.appspot.com",
  messagingSenderId: "27611183396",
  appId: "1:27611183396:web:8498eb8fbe16ec2fbadbb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =  getAuth();