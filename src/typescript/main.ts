class personas {
  nombre: string;
  puntuacion_max: number;
  pt_facil: number;
  pt_media: number;
  pt_dificil: number;

  constructor(
    nombre: string,
    puntuacion_max: number,
    pt_facil: number,
    pt_media: number,
    pt_dificil: number
  ) {
    this.nombre = nombre;
    this.puntuacion_max = puntuacion_max;
    this.pt_facil = pt_facil;
    this.pt_media = pt_media;
    this.pt_dificil = pt_dificil;
  }
}

//LOCALSTORE
function guardar(persona: personas): void {
  localStorage.setItem(persona.nombre, JSON.stringify(persona));
}

function obtener(nombre: string): any {
  if (localStorage.getItem(nombre)) {
    var p = localStorage.getItem(nombre);
    return p;
  }
}

//FUNCIONAMIENTO
var pedro = new personas("pedro", 12, 3, 3, 1);
var juan = new personas("juan", 10, 3, 4, 2);
var lucas = new personas("lucas", 4, 1, 3, 20);
guardar(pedro);
guardar(juan);
guardar(lucas);
console.log(JSON.parse(obtener("pedro")).nombre);

//FUNCIONALIDADES

function sortFunction(a: any, b: any) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] > b[1] ? -1 : 1;
  }
}

//Clasificación general
document.getElementById("clasificacion_btn")?.addEventListener("click", (e) => {
  var plantilla = document.getElementById(
    "cabecera_modal_clasi"
  ) as HTMLDivElement;
  plantilla.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Clasificación General</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>`;
  var plantilla_cuerpo = document.getElementById(
    "cuerpo_modal_clasi"
  ) as HTMLTableCaptionElement;
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
    <th scope="row">${q+1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
  </tr>`;
  }
});

//Clasificación Principiante

document.getElementById("btn-clasi-easy")?.addEventListener("click", (e) => {
  var plantilla = document.getElementById(
    "cabecera_modal_clasi"
  ) as HTMLDivElement;
  plantilla.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Clasificación Principiante</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>`;
  var plantilla_cuerpo = document.getElementById(
    "cuerpo_modal_clasi"
  ) as HTMLTableCaptionElement;
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
    <th scope="row">${q+1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
  </tr>`;
  }
});


//Clasificación Intermedio

document.getElementById("btn-clasi-middle")?.addEventListener("click", (e) => {
  var plantilla = document.getElementById(
    "cabecera_modal_clasi"
  ) as HTMLDivElement;
  plantilla.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Clasificación Intermedia</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>`;
  var plantilla_cuerpo = document.getElementById(
    "cuerpo_modal_clasi"
  ) as HTMLTableCaptionElement;
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
    <th scope="row">${q+1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
  </tr>`;
  }
});

//Clasificación HardCore

document.getElementById("btn-clasi-hardcore")?.addEventListener("click", (e) => {
  var plantilla = document.getElementById(
    "cabecera_modal_clasi"
  ) as HTMLDivElement;
  plantilla.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Clasificación HardCore</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>`;
  var plantilla_cuerpo = document.getElementById(
    "cuerpo_modal_clasi"
  ) as HTMLTableCaptionElement;
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
    <th scope="row">${q+1}</th>
    <td>${data[q][0]}</td>
    <td>${data[q][1]}</td>
  </tr>`;
  }
});

//Relog
