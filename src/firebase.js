// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6rSQ3mNEWnL4i2S1U28_hMb_s_edm4Zw",
  authDomain: "sir3n-hq.firebaseapp.com",
  projectId: "sir3n-hq",
  storageBucket: "sir3n-hq.firebasestorage.app",
  messagingSenderId: "1004495456654",
  appId: "1:1004495456654:web:f7462b2cf731f7af36bcdf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
