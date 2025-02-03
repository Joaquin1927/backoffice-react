// components/Suscriptores.jsx
"use client";
import { useEffect, useState } from "react";
import { obtenerSuscripcionesDeYouTube } from "../services/suscribers";

export default function Suscriptores() {
  const [suscriptores, setSuscriptores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await obtenerSuscripcionesDeYouTube();
        setSuscriptores(data);
      } catch (error) {
        setError("Error al cargar suscriptores: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  if (loading) {
    return <p>Cargando suscriptores...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h2>Suscriptores</h2>
      <ul>
        {suscriptores.map((suscriptor) => (
          <li key={suscriptor.id}>
            {suscriptor.nombre} - {suscriptor.email} ({suscriptor.plataforma})
          </li>
        ))}
      </ul>
    </div>
  );
}