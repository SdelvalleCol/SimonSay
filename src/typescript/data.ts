function obtener_x(nombre: string): any {
  if (localStorage.getItem(nombre)) {
    var p = localStorage.getItem(nombre);
    return p;
  }
}

function sortFunction_2(a: any, b: any) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] > b[1] ? -1 : 1;
  }
}

function load() {
  var plantilla = document.getElementById(
    "cuerpo_modal_clasi"
  ) as HTMLDivElement;
  var data: Array<any> = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var subdata = [];
    if (key) {
      subdata.push(key, JSON.parse(obtener_x(key)).pt_facil);
      data.push(subdata);
    }
  }
  data.sort(sortFunction_2);
  for (var p = 0; p < data.length; p++) {
    plantilla.innerHTML += `<div class="row">
    <div class="col-2">
        ${p + 1}
    </div>
    <div class="col-4">
        ${data[p][0]}
    </div>
    <div class="col-6">
        ${data[p][1]}
    </div>
</div>
    `;
  }
}

load();

function facil() {
  var plantilla = document.getElementById(
    "cuerpo_modal_clasi"
  ) as HTMLTableCaptionElement;
  plantilla.innerHTML = "";
  load();
}

function intermedio() {
    var plantilla = document.getElementById(
        "cuerpo_modal_clasi"
      ) as HTMLDivElement;
      plantilla.innerHTML = "";
      var data: Array<any> = [];
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var subdata = [];
        if (key) {
          subdata.push(key, JSON.parse(obtener_x(key)).pt_media);
          data.push(subdata);
        }
      }
      data.sort(sortFunction_2);
      for (var p = 0; p < data.length; p++) {
        plantilla.innerHTML += `<div class="row">
        <div class="col-2">
            ${p + 1}
        </div>
        <div class="col-4">
            ${data[p][0]}
        </div>
        <div class="col-6">
            ${data[p][1]}
        </div>
    </div>
        `;
      }
}

function dificil() {
    var plantilla = document.getElementById(
        "cuerpo_modal_clasi"
      ) as HTMLDivElement;
      plantilla.innerHTML = "";
      var data: Array<any> = [];
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var subdata = [];
        if (key) {
          subdata.push(key, JSON.parse(obtener_x(key)).pt_dificil);
          data.push(subdata);
        }
      }
      data.sort(sortFunction_2);
      for (var p = 0; p < data.length; p++) {
        plantilla.innerHTML += `<div class="row">
        <div class="col-2">
            ${p + 1}
        </div>
        <div class="col-4">
            ${data[p][0]}
        </div>
        <div class="col-6">
            ${data[p][1]}
        </div>
    </div>
        `;
      }
}
