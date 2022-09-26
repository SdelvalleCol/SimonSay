class personas {
  nombre: string;
  pt_facil: number;
  pt_media: number;
  pt_dificil: number;

  constructor(
    nombre: string,
    pt_facil: number,
    pt_media: number,
    pt_dificil: number
  ) {
    this.nombre = nombre;
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
var pedro = new personas("pedro", 12, 40, 20);
var juan = new personas("juan", 10, 20, 30);
guardar(pedro);
guardar(juan);
//console.log(JSON.parse(obtener("pedro")).nombre);

//FUNCIONALIDADES

function sortFunction(a: any, b: any) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] > b[1] ? -1 : 1;
  }
}

//General
document.getElementById("clasificacion_btn")?.addEventListener("click", (e) => {
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
      subdata.push(
        clave,
        JSON.parse(obtener(clave)).pt_facil
      );
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
      subdata.push(
        clave,
        JSON.parse(obtener(clave)).pt_facil
      );
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
      subdata.push(
        clave,
        JSON.parse(obtener(clave)).pt_media
      );
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
document
  .getElementById("btn-clasi-hardcore")
  ?.addEventListener("click", (e) => {
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
        subdata.push(
          clave,
          JSON.parse(obtener(clave)).pt_dificil
        );
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
var Puntuación_despliegue = document.getElementById("contador-contenido") as HTMLParagraphElement
let sound = new Audio("../src/sound/efecto.mp3");
var contador_juego_simon:number = 0;
var intensidad:number = 1500;
var patron:string = "";
var patron_ingresado:string = ""
var Puntuación_usuario:number = 0
Puntuación_despliegue.innerHTML = Puntuación_usuario + ""

//botones
document.getElementById("verde")?.addEventListener("click", (e) => {
  patron_ingresado = patron_ingresado + "a"
  var plantilla = document.getElementById("verde") as HTMLDivElement
  plantilla.style.background = "rgb(0, 255, 0)"
  setTimeout(function(){
    plantilla.style.background = "rgb(40, 198, 40)"
  },500)
})

document.getElementById("rojo")?.addEventListener("click", (e) => {
  patron_ingresado = patron_ingresado + "b"
  var plantilla = document.getElementById("rojo") as HTMLDivElement
  plantilla.style.background = "rgb(255, 0, 0)"
  setTimeout(function(){
    plantilla.style.background = "rgb(188, 31, 31)"
  },500)
})

document.getElementById("amarillo")?.addEventListener("click", (e) => {
  patron_ingresado = patron_ingresado + "c"
  var plantilla = document.getElementById("amarillo") as HTMLDivElement
  plantilla.style.background = "rgb(255, 255, 0)"
  setTimeout(function(){
    plantilla.style.background = "rgb(190, 190, 33)"
  },500)
})

document.getElementById("azul")?.addEventListener("click", (e) => {
  patron_ingresado = patron_ingresado + "d"
  var plantilla = document.getElementById("azul") as HTMLDivElement
  plantilla.style.background = "rgb(0, 0, 255)"
  setTimeout(function(){
    plantilla.style.background = "rgb(37, 37, 214)"
  },500)
})


//Puntuación
document.getElementById("verificar_btn")?.addEventListener("click", (e) => {
  if (patron_ingresado != patron) {
    alert("perdiste")
    var bnt_ocultar = document.getElementById("btn_principal") as HTMLButtonElement
    bnt_ocultar.style.display = "block"
    var bnt_ocultar = document.getElementById("verificar_btn") as HTMLButtonElement
    bnt_ocultar.style.display = "none"
  } else if (patron == patron_ingresado) {
    alert("ganaste")
    Puntuación_usuario++
    Puntuación_despliegue.innerHTML = Puntuación_usuario +""
    juego_simon()
      
  }
  console.log(patron)
  console.log(patron_ingresado)
  patron = ""
  patron_ingresado = ""
})


//Niveles
document.getElementById("btn-facilongo")?.addEventListener("click", (e) => {
  intensidad = 1500;
  var anuncio = document.getElementById("lvl_easy_div") as HTMLDivElement;
  var anuncio_2 = document.getElementById("lvl_div_mid") as HTMLDivElement;
  var anuncio_3 = document.getElementById("lvl_div_hard") as HTMLDivElement;
  anuncio.style.display = "block";
  anuncio_2.style.display = "none";
  anuncio_3.style.display = "none";
});

document.getElementById("btn-relax")?.addEventListener("click", (e) => {
  intensidad = 1000;
  var anuncio = document.getElementById("lvl_easy_div") as HTMLDivElement;
  var anuncio_2 = document.getElementById("lvl_div_mid") as HTMLDivElement;
  var anuncio_3 = document.getElementById("lvl_div_hard") as HTMLDivElement;
  anuncio.style.display = "none";
  anuncio_2.style.display = "block";
  anuncio_3.style.display = "none";
});

document.getElementById("btn-imposible")?.addEventListener("click", (e) => {
  intensidad = 500;
  var anuncio = document.getElementById("lvl_easy_div") as HTMLDivElement;
  var anuncio_2 = document.getElementById("lvl_div_mid") as HTMLDivElement;
  var anuncio_3 = document.getElementById("lvl_div_hard") as HTMLDivElement;
  anuncio.style.display = "none";
  anuncio_2.style.display = "none";
  anuncio_3.style.display = "block";
});

//Juego
function juego_simon() {
  var juego_ciclos = setInterval(function Iluminar() {
    var e = Math.floor(Math.random() * 4) + 1;
    var plantilla_verde = document.getElementById("verde") as HTMLDivElement;
    plantilla_verde.style.backgroundColor = "rgb(40, 198, 40)";
    var plantilla_rojo = document.getElementById("rojo") as HTMLDivElement;
    plantilla_rojo.style.backgroundColor = "rgb(188, 31, 31)";
    var plantilla_amarillo = document.getElementById(
      "amarillo"
    ) as HTMLDivElement;
    plantilla_amarillo.style.backgroundColor = "rgb(190, 190, 33)";
    var plantilla_azul = document.getElementById("azul") as HTMLDivElement;
    plantilla_azul.style.backgroundColor = "rgb(37, 37, 214)";
    if (contador_juego_simon >= Puntuación_usuario+1) {
      clearInterval(juego_ciclos);
      plantilla_verde.style.backgroundColor = "rgb(40, 198, 40)";
      plantilla_rojo.style.backgroundColor = "rgb(188, 31, 31)";
      plantilla_amarillo.style.backgroundColor = "rgb(190, 190, 33)";
      plantilla_azul.style.backgroundColor = "rgb(37, 37, 214)";
      contador_juego_simon = 0;
      var bnt_ocultar = document.getElementById("btn_principal") as HTMLButtonElement
      bnt_ocultar.style.display = "none"
      var bnt_ocultar = document.getElementById("verificar_btn") as HTMLButtonElement
      bnt_ocultar.style.display = "block"

    } else {
      if (e == 1) {
        plantilla_verde.style.backgroundColor = "rgb(0, 255, 0)";
        sound.play();
        patron = patron + "a";
      } else if (e == 2) {
        plantilla_rojo.style.backgroundColor = "rgb(255, 0, 0)";
        sound.play();
        patron = patron + "b";
      } else if (e == 3) {
        plantilla_amarillo.style.backgroundColor = "rgb(255, 255, 0)";
        sound.play();
        patron = patron + "c";
      } else if (e == 4) {
        plantilla_azul.style.backgroundColor = "rgb(0, 0, 255)";
        sound.play();
        patron = patron + "d";
      } else {
        clearInterval(juego_ciclos);
      }
      contador_juego_simon++;
    }
  }, intensidad);
}
