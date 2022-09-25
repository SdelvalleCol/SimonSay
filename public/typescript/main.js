"use strict";
var _a, _b, _c, _d, _e, _f, _g;
class personas {
    constructor(nombre, puntuacion_max, pt_facil, pt_media, pt_dificil, tp_facil, tp_media, tp_dificil) {
        this.nombre = nombre;
        this.puntuacion_max = puntuacion_max;
        this.pt_facil = pt_facil;
        this.pt_media = pt_media;
        this.pt_dificil = pt_dificil;
        this.tp_facil = tp_facil;
        this.tp_media = tp_media;
        this.tp_dificil = tp_dificil;
    }
}
//LOCALSTORE
function guardar(persona) {
    localStorage.setItem(persona.nombre, JSON.stringify(persona));
}
function obtener(nombre) {
    if (localStorage.getItem(nombre)) {
        var p = localStorage.getItem(nombre);
        return p;
    }
}
//FUNCIONAMIENTO
var pedro = new personas("pedro", 12, 40, 3, 20, 3, 60, 1);
var juan = new personas("juan", 10, 20, 3, 30, 4, 32, 2);
var lucas = new personas("lucas", 4, 10, 1, 20, 3, 30, 20);
guardar(pedro);
guardar(juan);
guardar(lucas);
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
//Clasificación general
(_a = document.getElementById("clasificacion_btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
    var plantilla = document.getElementById("cabecera_modal_clasi");
    plantilla.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Clasificación General</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>`;
    var plantilla_cuerpo = document.getElementById("cuerpo_modal_clasi");
    plantilla_cuerpo.innerHTML = "";
    var data = [];
    for (var x = 0; x <= localStorage.length - 1; x++) {
        var clave = localStorage.key(x);
        if (clave != null) {
            var subdata = [];
            subdata.push(clave, JSON.parse(obtener(clave)).puntuacion_max);
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
    for (var x = 0; x <= localStorage.length - 1; x++) {
        var clave = localStorage.key(x);
        if (clave != null) {
            var subdata = [];
            subdata.push(clave, JSON.parse(obtener(clave)).pt_facil, JSON.parse(obtener(clave)).tp_facil);
            data.push(subdata);
        }
    }
    data.sort(sortFunction);
    for (var q = 0; q < data.length; q++) {
        plantilla_cuerpo.innerHTML += `<tr>
    <th scope="row">${q + 1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
    <td>${data[q][2]}</td>
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
    for (var x = 0; x <= localStorage.length - 1; x++) {
        var clave = localStorage.key(x);
        if (clave != null) {
            var subdata = [];
            subdata.push(clave, JSON.parse(obtener(clave)).pt_media, JSON.parse(obtener(clave)).tp_media);
            data.push(subdata);
        }
    }
    data.sort(sortFunction);
    for (var q = 0; q < data.length; q++) {
        plantilla_cuerpo.innerHTML += `<tr>
    <th scope="row">${q + 1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
    <td>${data[q][2]}</td>
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
    for (var x = 0; x <= localStorage.length - 1; x++) {
        var clave = localStorage.key(x);
        if (clave != null) {
            var subdata = [];
            subdata.push(clave, JSON.parse(obtener(clave)).pt_dificil, JSON.parse(obtener(clave)).tp_dificil);
            data.push(subdata);
        }
    }
    data.sort(sortFunction);
    for (var q = 0; q < data.length; q++) {
        plantilla_cuerpo.innerHTML += `<tr>
    <th scope="row">${q + 1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
    <td>${data[q][2]}</td>
  </tr>`;
    }
});
//Relog
var cronometrar = false;
var acumulado = 0;
function crome() {
    cronometrar = true;
}
var conteo = setInterval(temporizador, 1000);
function temporizador() {
    if (cronometrar) {
        var plantilla = document.getElementById("contador-contenido");
        plantilla.innerHTML = acumulado + "";
        acumulado++;
        if (acumulado > 10) {
            clearInterval(conteo);
        }
    }
}
//Juego
var contador_juego_simon = 0;
var intensidad = 1000;
(_e = document.getElementById("btn-facilongo")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", (e) => {
    intensidad = 1000;
    alert("a");
});
(_f = document.getElementById("btn-relax")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", (e) => {
    intensidad = 500;
    alert("b");
});
(_g = document.getElementById("btn-imposible")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", (e) => {
    intensidad = 250;
    alert("c");
});
function juego_simon() {
    var juego_ciclos = setInterval(function Iluminar() {
        var e = Math.floor(Math.random() * 4) + 1;
        console.log(e);
        var plantilla_verde = document.getElementById("verde");
        plantilla_verde.style.backgroundColor = "rgb(40, 198, 40)";
        var plantilla_rojo = document.getElementById("rojo");
        plantilla_rojo.style.backgroundColor = "rgb(188, 31, 31)";
        var plantilla_amarillo = document.getElementById("amarillo");
        plantilla_amarillo.style.backgroundColor = "rgb(190, 190, 33)";
        var plantilla_azul = document.getElementById("azul");
        plantilla_azul.style.backgroundColor = "rgb(37, 37, 214)";
        if (e == 1) {
            plantilla_verde.style.backgroundColor = "rgb(0, 255, 0)";
        }
        else if (e == 2) {
            plantilla_rojo.style.backgroundColor = "rgb(255, 0, 0)";
        }
        else if (e == 3) {
            plantilla_amarillo.style.backgroundColor = "rgb(255, 255, 0)";
        }
        else if (e == 4) {
            plantilla_azul.style.backgroundColor = "rgb(0, 0, 255)";
        }
        else {
            clearInterval(juego_ciclos);
            alert("Alerta de desarrollo");
        }
        contador_juego_simon++;
        if (contador_juego_simon > 4) {
            clearInterval(juego_ciclos);
            plantilla_verde.style.backgroundColor = "rgb(40, 198, 40)";
            plantilla_rojo.style.backgroundColor = "rgb(188, 31, 31)";
            plantilla_amarillo.style.backgroundColor = "rgb(190, 190, 33)";
            plantilla_azul.style.backgroundColor = "rgb(37, 37, 214)";
            contador_juego_simon = 0;
        }
    }, intensidad);
}
