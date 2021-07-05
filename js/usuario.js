
function docTitle(){
    document.title = usuario.nombre;
}

let tabla=document.querySelector("#tablaEmpleos")
function cargarPostulaciones() {
    tabla.innerHTML = "";
    let trabajos= JSON.parse(localStorage.getItem("trabajo")) || [];
    trabajos.forEach(function (trabajo, index) {
      let fila = document.createElement("tr"); 
      let datos = `
                  <th scope="row">${trabajo.id}</th>
                  <td>${trabajo.nombre}</td>
                  <td>${trabajo.puesto}</td>
                  <td>${trabajo.tipo}</td>
                  <td>
                  <button class="btn btn-danger" onclick='quitarPostulacion(${index})'>Quitar Postulacion</button>
                  </td>`;
        fila.innerHTML = datos;
        tabla.appendChild(fila);
    });
  };

cargarPostulaciones()


/*let idEmpleo = document.getElementsByTagName('p')[5].innerHTML;

const quitarPostulacion = function(e){
    //localStorage.setItem("trabajo", '')
}*/