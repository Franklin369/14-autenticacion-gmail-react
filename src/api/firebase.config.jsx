
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAv_2gKtBhV6tgEGYUlFmSwXsSinCJapyM",
  authDomain: "login-5f06b.firebaseapp.com",
  projectId: "login-5f06b",
  storageBucket: "login-5f06b.appspot.com",
  messagingSenderId: "871189597682",
  appId: "1:871189597682:web:7a70ffc05b902664826f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)