// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBv0BXlDMfvPQwy-veHWymkN81BSEjtOQA",
  authDomain: "dopamina-34a45.firebaseapp.com",
  projectId: "dopamina-34a45",
  storageBucket: "dopamina-34a45.appspot.com",
  messagingSenderId: "343368092154",
  appId: "1:343368092154:web:74c51033a70ec9f0bc3c43",
  measurementId: "G-H701Z79Y54"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };