import { registrarUsuario, loginUsuario } from './auth.js';
import { cargarSuscriptores } from './suscriptores.js';
import { fetchSubscriptions } from './youtube-api.js';

const MENU = document.querySelector("#menu");
const ROUTER = document.querySelector("#ruteo");
const HOME = document.querySelector("#pantalla-home");
const LOGIN = document.querySelector("#pantalla-login");
const REGISTRO = document.querySelector("#pantalla-registro");

Inicio();

function Inicio() {
    Eventos();
}

function Eventos() {
    ROUTER.addEventListener('ionRouteDidChange', Navegar);
    document.querySelector("#btnRegistrar").addEventListener('click', TomarDatosRegistro);
    document.querySelector("#btnLogin").addEventListener('click', TomarDatosLogin);
    document.querySelector("#btnCargarSuscriptores").addEventListener('click', CargarSuscriptores);
}

// Funciones principales (TomarDatosRegistro, TomarDatosLogin, etc.)