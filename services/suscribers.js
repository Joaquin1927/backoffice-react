// services/suscriptores.js

// Variables de entorno
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_YT;
const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID;

/**
 * Obtiene las suscripciones de un canal de YouTube.
 * @returns {Promise<Array>} Lista de suscripciones.
 */
export async function obtenerSuscripcionesDeYouTube() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&channelId=${CHANNEL_ID}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.items; // Devuelve la lista de suscripciones
  } catch (error) {
    console.error("Error al obtener suscripciones de YouTube:", error.message);
    return { error: true, message: error.message };
  }
}

/**
 * Obtiene los detalles de un video específico.
 * @param {string} videoId - ID del video.
 * @returns {Promise<Object>} Detalles del video.
 */
export async function obtenerDetallesDeVideo(videoId) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.items[0]; // Devuelve los detalles del video
  } catch (error) {
    console.error("Error al obtener detalles del video:", error.message);
    return { error: true, message: error.message };
  }
}

/**
 * Busca videos en un canal de YouTube.
 * @param {string} query - Término de búsqueda.
 * @returns {Promise<Array>} Lista de videos encontrados.
 */
export async function buscarVideosEnCanal(query) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&q=${query}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.items; // Devuelve la lista de videos encontrados
  } catch (error) {
    console.error("Error al buscar videos en el canal:", error.message);
    return { error: true, message: error.message };
  }
}