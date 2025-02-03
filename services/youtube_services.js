// services/youtubeService.js
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const CHANNEL_ID = "UC-GhcmgCg_S1GDPTtdzQojA";
const API_KEY = "AIzaSyAVs8Og1MlTgbvP410aMcazl5sThz9VSCk";

export async function fetchSubscriptions() {
  try {
    const response = await fetch(
      `${BASE_URL}/subscriptions?part=snippet&channelId=${CHANNEL_ID}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener suscripciones de YouTube:", error.message);
    return { error: true, message: error.message };
  }
}