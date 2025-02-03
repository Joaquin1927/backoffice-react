export async function obtenerDatosGoogleCloud() {
    try {
        const response = await fetch('http://localhost:3000/google-data');
        
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error al obtener datos de Google Cloud:", error);
        return { error: true, message: error.message };
    }
}
