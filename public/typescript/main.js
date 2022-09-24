"use strict";
var _a, _b, _c, _d;
class personas {
    constructor(nombre, puntuacion_max, pt_facil, pt_media, pt_dificil) {
        this.nombre = nombre;
        this.puntuacion_max = puntuacion_max;
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
        var p = localStorage.getItem(nombre);
        return p;
    }
}
//FUNCIONAMIENTO
var pedro = new personas("pedro", 12, 3, 3, 1);
var juan = new personas("juan", 10, 0, 4, 2);
var lucas = new personas("lucas", 4, 1, 3, 20);
guardar(pedro);
guardar(juan);
guardar(lucas);
console.log(JSON.parse(obtener("pedro")).nombre);
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
    for (var x = 0; x <= localStorage.length - 1; x++) {
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
(_d = document.getElementById("btn-clasi-hardcore")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", (e) => {
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
