import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB1v4aLTT1HCv8Q3Bwb1F56uS-QxuEO2Sw",
  authDomain: "hackathon-infojobs-7563b.firebaseapp.com",
  projectId: "hackathon-infojobs-7563b",
  storageBucket: "hackathon-infojobs-7563b.appspot.com",
  messagingSenderId: "217460154644",
  appId: "1:217460154644:web:bfb73771c6902a658e6201",
  measurementId: "G-RNEEMBGPZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);