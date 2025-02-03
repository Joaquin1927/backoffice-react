// components/Registro.jsx
"use client";
import { useState } from "react";
import { registrarUsuario } from "../lib/auth";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [error, setError] = useState("");

  const handleRegistro = async () => {
    if (nombre && email && plataforma) {
      try {
        await registrarUsuario(email, "password123"); // Cambia "password123" por una contraseña dinámica
        alert("Suscriptor registrado con éxito");
      } catch (error) {
        setError("Error al registrar suscriptor: " + error.message);
      }
    } else {
      setError("Por favor, completa todos los campos.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        value={plataforma}
        onChange={(e) => setPlataforma(e.target.value)}
      >
        <option value="YouTube">YouTube</option>
        <option value="Mercado Pago">Mercado Pago</option>
      </select>
      <button onClick={handleRegistro}>Registrar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}