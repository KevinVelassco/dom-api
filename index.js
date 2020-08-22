import menu from './menu/menu.js';
import { clock, alarm } from './reloj/reloj.js';
import { shortcuts } from './teclado/teclado.js';

document.addEventListener("DOMContentLoaded", e => {
    menu(".panel-btn", ".panel", ".menu a");
    clock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarm.mp3","#activar-alarma", "#desactivar-alarma");
});

document.addEventListener("keydown", (e) => {
    shortcuts(e, ".panel-btn");
});

/*document.addEventListener("keypress", (e) => {
    shortcuts(e);
});*/

/*document.addEventListener("keyup", (e) => {
    shortcuts(e);
});*/