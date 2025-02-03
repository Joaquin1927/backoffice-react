// components/Backoffice.jsx
"use client"; // Marca este componente como del lado del cliente

import { useEffect } from "react";

export default function Backoffice() {
  // Inicializa Firebase
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBv0BXlDMfvPQwy-veHWymkN81BSEjtOQA",
      authDomain: "dopamina-34a45.firebaseapp.com",
      projectId: "dopamina-34a45",
      storageBucket: "dopamina-34a45.appspot.com",
      messagingSenderId: "343368092154",
      appId: "1:343368092154:web:74c51033a70ec9f0bc3c43",
      measurementId: "G-H701Z79Y54"
    };

    import("firebase/app").then((firebase) => {
      firebase.initializeApp(firebaseConfig);
    });
  }, []);

  // Carga el script de Google Analytics
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-N4CW7V62RY";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-N4CW7V62RY");
    };
  }, []);

  return (
    <div>
      <h1>backoffice</h1>
      <div id="subscribers"></div>
    </div>
  );
}