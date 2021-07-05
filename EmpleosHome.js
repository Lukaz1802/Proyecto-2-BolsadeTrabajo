let trabajos= JSON.parse(localStorage.getItem("trabajo")) || []

let tabla=document.querySelector("#tdobyCuerpo")
function listaEmpleos(trabajos) {
      tabla.innerHTML = "";
      trabajos.forEach(function (empleo, index) {
        let fila = document.createElement("tr");
        let cuerpo = `<th scope="row">${empleo.puesto}</th>
                 <td>${empleo.nombre}</td>
                 <td>${empleo.ubicacion}</td>
                 <td>${empleo.tipo}</td>
                <td><button class="btn btn-light " onclick="verEmpleo(${index})">Ver</button></td>`;
        fila.innerHTML = cuerpo;
        tabla.appendChild(fila);
      });
    }

//Para que se ejecute la lista de empleo sin problemas porque comparto el mismo js 
listaEmpleos(trabajos)




function filterTabla() {
      let texto = document.querySelector("#textBuscar");
      trabajos = JSON.parse(localStorage.getItem("trabajo"));
      trabajos = trabajos.filter(function (item) {
        return item.nombre.toUpperCase().indexOf(texto.value.toUpperCase()) > -1;
      });
      console.log(trabajos);
      listaEmpleos(trabajos);
    }

 