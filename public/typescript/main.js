"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
class personas {
    constructor(nombre, pt_facil, pt_media, pt_dificil) {
        this.nombre = nombre;
        this.pt_facil = pt_facil;
        this.pt_media = pt_media;
        this.pt_dificil = pt_dificil;
    }
}
//LOCALSTORE
function guardar(persona) {
    localStorage.setItem(persona.nombre, JSON.stringify(persona));
}
function obtener(nombre) {
    if (localStorage.getItem(nombre)) {
        var p = (localStorage.getItem(nombre));
        return p;
    }
}
//FUNCIONAMIENTO
var pedro = new personas("pedro", 3, 2, 1);
guardar(pedro);
//console.log(JSON.parse(obtener("pedro")).nombre);
//FUNCIONALIDADES
function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return a[1] > b[1] ? -1 : 1;
    }
}
//General
(_a = document.getElementById("clasificacion_btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
    var plantilla = document.getElementById("cabecera_modal_clasi");
    plantilla.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Clasificación Principiante</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>`;
    var plantilla_cuerpo = document.getElementById("cuerpo_modal_clasi");
    plantilla_cuerpo.innerHTML = "";
    var data = [];
    var ciclos;
    if (localStorage.length > 10) {
        ciclos = 10;
    }
    else {
        ciclos = localStorage.length;
    }
    for (var x = 0; x <= ciclos - 1; x++) {
        var clave = localStorage.key(x);
        if (clave != null) {
            var subdata = [];
            subdata.push(clave, JSON.parse(obtener(clave)).pt_facil);
            data.push(subdata);
        }
    }
    data.sort(sortFunction);
    for (var q = 0; q < data.length; q++) {
        plantilla_cuerpo.innerHTML += `<tr>
    <th scope="row">${q + 1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
  </tr>`;
    }
});
//Clasificación Principiante
(_b = document.getElementById("btn-clasi-easy")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => {
    var plantilla = document.getElementById("cabecera_modal_clasi");
    plantilla.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Clasificación Principiante</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>`;
    var plantilla_cuerpo = document.getElementById("cuerpo_modal_clasi");
    plantilla_cuerpo.innerHTML = "";
    var data = [];
    var ciclos;
    if (localStorage.length > 10) {
        ciclos = 10;
    }
    else {
        ciclos = localStorage.length;
    }
    for (var x = 0; x <= ciclos - 1; x++) {
        var clave = localStorage.key(x);
        if (clave != null) {
            var subdata = [];
            subdata.push(clave, JSON.parse(obtener(clave)).pt_facil);
            data.push(subdata);
        }
    }
    data.sort(sortFunction);
    for (var q = 0; q < data.length; q++) {
        plantilla_cuerpo.innerHTML += `<tr>
    <th scope="row">${q + 1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
  </tr>`;
    }
});
//Clasificación Intermedio
(_c = document.getElementById("btn-clasi-middle")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", (e) => {
    var plantilla = document.getElementById("cabecera_modal_clasi");
    plantilla.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Clasificación Intermedia</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>`;
    var plantilla_cuerpo = document.getElementById("cuerpo_modal_clasi");
    plantilla_cuerpo.innerHTML = "";
    var data = [];
    var ciclos;
    if (localStorage.length > 10) {
        ciclos = 10;
    }
    else {
        ciclos = localStorage.length;
    }
    for (var x = 0; x <= ciclos - 1; x++) {
        var clave = localStorage.key(x);
        if (clave != null) {
            var subdata = [];
            subdata.push(clave, JSON.parse(obtener(clave)).pt_media);
            data.push(subdata);
        }
    }
    data.sort(sortFunction);
    for (var q = 0; q < data.length; q++) {
        plantilla_cuerpo.innerHTML += `<tr>
    <th scope="row">${q + 1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
  </tr>`;
    }
});
//Clasificación HardCore
(_d = document
    .getElementById("btn-clasi-hardcore")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", (e) => {
    var plantilla = document.getElementById("cabecera_modal_clasi");
    plantilla.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Clasificación HardCore</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>`;
    var plantilla_cuerpo = document.getElementById("cuerpo_modal_clasi");
    plantilla_cuerpo.innerHTML = "";
    var data = [];
    var ciclos;
    if (localStorage.length > 10) {
        ciclos = 10;
    }
    else {
        ciclos = localStorage.length;
    }
    for (var x = 0; x <= ciclos - 1; x++) {
        var clave = localStorage.key(x);
        if (clave != null) {
            var subdata = [];
            subdata.push(clave, JSON.parse(obtener(clave)).pt_dificil);
            data.push(subdata);
        }
    }
    data.sort(sortFunction);
    for (var q = 0; q < data.length; q++) {
        plantilla_cuerpo.innerHTML += `<tr>
    <th scope="row">${q + 1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
  </tr>`;
    }
});
//parametros
var Puntuación_despliegue = document.getElementById("contador-contenido");
let sound = new Audio("/sound/efecto.mp3");
var contador_juego_simon = 0;
var intensidad = 1200;
var patron = "";
var patron_ingresado = "";
var Puntuación_usuario = 0;
Puntuación_despliegue.innerHTML = Puntuación_usuario + "";
var dificultad = "facil";
//botones
(_e = document.getElementById("verde")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", (e) => {
    patron_ingresado = patron_ingresado + "a";
    var plantilla = document.getElementById("verde");
    plantilla.style.background = "rgb(0, 255, 0)";
    setTimeout(function () {
        plantilla.style.background = "rgb(40, 198, 40)";
    }, 500);
    sound.play();
});
(_f = document.getElementById("rojo")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", (e) => {
    patron_ingresado = patron_ingresado + "b";
    var plantilla = document.getElementById("rojo");
    plantilla.style.background = "rgb(255, 0, 0)";
    setTimeout(function () {
        plantilla.style.background = "rgb(188, 31, 31)";
    }, 500);
    sound.play();
});
(_g = document.getElementById("amarillo")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", (e) => {
    patron_ingresado = patron_ingresado + "c";
    var plantilla = document.getElementById("amarillo");
    plantilla.style.background = "rgb(255, 255, 0)";
    setTimeout(function () {
        plantilla.style.background = "rgb(190, 190, 33)";
    }, 500);
    sound.play();
});
(_h = document.getElementById("azul")) === null || _h === void 0 ? void 0 : _h.addEventListener("click", (e) => {
    patron_ingresado = patron_ingresado + "d";
    var plantilla = document.getElementById("azul");
    plantilla.style.background = "rgb(0, 0, 255)";
    setTimeout(function () {
        plantilla.style.background = "rgb(37, 37, 214)";
    }, 500);
    sound.play();
});
//Niveles
(_j = document.getElementById("btn-facilongo")) === null || _j === void 0 ? void 0 : _j.addEventListener("click", (e) => {
    intensidad = 1200;
    var anuncio = document.getElementById("lvl_easy_div");
    var anuncio_2 = document.getElementById("lvl_div_mid");
    var anuncio_3 = document.getElementById("lvl_div_hard");
    anuncio.style.display = "block";
    anuncio_2.style.display = "none";
    anuncio_3.style.display = "none";
    Puntuación_despliegue.innerHTML = 0 + "";
    patron = "";
    patron_ingresado = "";
    Puntuación_usuario = 0;
    var bnt_ocultar = document.getElementById("btn_principal");
    bnt_ocultar.style.display = "block";
    var bnt_ocultar = document.getElementById("verificar_btn");
    bnt_ocultar.style.display = "none";
    dificultad = "facil";
});
(_k = document.getElementById("btn-relax")) === null || _k === void 0 ? void 0 : _k.addEventListener("click", (e) => {
    intensidad = 800;
    var anuncio = document.getElementById("lvl_easy_div");
    var anuncio_2 = document.getElementById("lvl_div_mid");
    var anuncio_3 = document.getElementById("lvl_div_hard");
    anuncio.style.display = "none";
    anuncio_2.style.display = "block";
    anuncio_3.style.display = "none";
    Puntuación_despliegue.innerHTML = 0 + "";
    patron = "";
    patron_ingresado = "";
    Puntuación_usuario = 0;
    var bnt_ocultar = document.getElementById("btn_principal");
    bnt_ocultar.style.display = "block";
    var bnt_ocultar = document.getElementById("verificar_btn");
    bnt_ocultar.style.display = "none";
    dificultad = "mid";
});
(_l = document.getElementById("btn-imposible")) === null || _l === void 0 ? void 0 : _l.addEventListener("click", (e) => {
    intensidad = 500;
    var anuncio = document.getElementById("lvl_easy_div");
    var anuncio_2 = document.getElementById("lvl_div_mid");
    var anuncio_3 = document.getElementById("lvl_div_hard");
    anuncio.style.display = "none";
    anuncio_2.style.display = "none";
    anuncio_3.style.display = "block";
    Puntuación_despliegue.innerHTML = 0 + "";
    patron = "";
    patron_ingresado = "";
    Puntuación_usuario = 0;
    var bnt_ocultar = document.getElementById("btn_principal");
    bnt_ocultar.style.display = "block";
    var bnt_ocultar = document.getElementById("verificar_btn");
    bnt_ocultar.style.display = "none";
    dificultad = "hard";
});
//Puntuación
(_m = document.getElementById("verificar_btn")) === null || _m === void 0 ? void 0 : _m.addEventListener("click", (e) => {
    if (patron_ingresado != patron) {
        var p = document.getElementById("contenedor_dificultad");
        p.innerHTML = dificultad;
        var q = document.getElementById('id01');
        q.style.display = "block";
        var bnt_ocultar = document.getElementById("btn_principal");
        bnt_ocultar.style.display = "block";
        var bnt_ocultar = document.getElementById("verificar_btn");
        bnt_ocultar.style.display = "none";
        Puntuación_despliegue.innerHTML = 0 + "";
    }
    else if (patron == patron_ingresado) {
        Puntuación_usuario++;
        Puntuación_despliegue.innerHTML = Puntuación_usuario + "";
        juego_simon();
    }
    patron = "";
    patron_ingresado = "";
});
//Juego
function juego_simon() {
    patron_ingresado = "";
    var juego_ciclos = setInterval(function Iluminar() {
        var e = Math.floor(Math.random() * 4) + 1;
        var plantilla_verde = document.getElementById("verde");
        plantilla_verde.style.backgroundColor = "rgb(40, 198, 40)";
        var plantilla_rojo = document.getElementById("rojo");
        plantilla_rojo.style.backgroundColor = "rgb(188, 31, 31)";
        var plantilla_amarillo = document.getElementById("amarillo");
        plantilla_amarillo.style.backgroundColor = "rgb(190, 190, 33)";
        var plantilla_azul = document.getElementById("azul");
        plantilla_azul.style.backgroundColor = "rgb(37, 37, 214)";
        if (contador_juego_simon >= Puntuación_usuario + 1) {
            clearInterval(juego_ciclos);
            plantilla_verde.style.backgroundColor = "rgb(40, 198, 40)";
            plantilla_rojo.style.backgroundColor = "rgb(188, 31, 31)";
            plantilla_amarillo.style.backgroundColor = "rgb(190, 190, 33)";
            plantilla_azul.style.backgroundColor = "rgb(37, 37, 214)";
            contador_juego_simon = 0;
            var bnt_ocultar = document.getElementById("btn_principal");
            bnt_ocultar.style.display = "none";
            var bnt_ocultar = document.getElementById("verificar_btn");
            bnt_ocultar.style.display = "block";
        }
        else {
            if (e == 1) {
                plantilla_verde.style.backgroundColor = "rgb(0, 255, 0)";
                sound.play();
                patron = patron + "a";
            }
            else if (e == 2) {
                plantilla_rojo.style.backgroundColor = "rgb(255, 0, 0)";
                sound.play();
                patron = patron + "b";
            }
            else if (e == 3) {
                plantilla_amarillo.style.backgroundColor = "rgb(255, 255, 0)";
                sound.play();
                patron = patron + "c";
            }
            else if (e == 4) {
                plantilla_azul.style.backgroundColor = "rgb(0, 0, 255)";
                sound.play();
                patron = patron + "d";
            }
            else {
                clearInterval(juego_ciclos);
            }
            contador_juego_simon++;
        }
    }, intensidad);
}
//Ingreso
(_o = document.getElementById("registrarse")) === null || _o === void 0 ? void 0 : _o.addEventListener("click", (e) => {
    var nombre = document.getElementById("nombre");
    if (nombre.value != "") {
        verificar_data(nombre.value, dificultad);
    }
});
//Verificacion
function verificar_data(nombre, dificultad_var) {
    var q = document.getElementById('id01');
    q.style.display = "none";
    var confirmar = false;
    for (var i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        if (clave == nombre) {
            confirmar = true;
            let data = JSON.parse(obtener(clave));
            var personasx;
            if (dificultad_var == "facil") {
                personasx = new personas(nombre, Puntuación_usuario, data.pt_media, data.pt_dificil);
                guardar(personasx);
            }
            else if (dificultad_var == "mid") {
                personasx = new personas(nombre, data.pt_facil, Puntuación_usuario, data.pt_dificil);
                guardar(personasx);
            }
            else {
                personasx = new personas(nombre, data.pt_facil, data.pt_media, Puntuación_usuario);
                guardar(personasx);
            }
            break;
        }
    }
    if (confirmar == false) {
        if (dificultad_var == "facil") {
            personasx = new personas(nombre, Puntuación_usuario, 0, 0);
            guardar(personasx);
        }
        else if (dificultad_var == "mid") {
            personasx = new personas(nombre, 0, Puntuación_usuario, 0);
            guardar(personasx);
        }
        else {
            personasx = new personas(nombre, 0, 0, Puntuación_usuario);
            guardar(personasx);
        }
    }
    Puntuación_usuario = 0;
}
