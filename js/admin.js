let linkAdmin = document.querySelector("#linkAdmin")

if (!usuario) {
    document.querySelector("body").innerHTML = `
      <div class="alert alert-danger" role="alert">No se encuentra logueado</div>
      `;
    setTimeout(function () {
      location.replace("/login.html");
    }, 2000);

  } else {

    if (usuario.email === "administrador@gmail.com") {
      linkAdmin.innerHTML = `
          <a class="nav-link" href="/admin.html">Administrador</a>
          `;
    }
  }

  function cargarTabla() {
    cuerpoTabla.innerHTML = "";
    let trabajos= JSON.parse(localStorage.getItem("trabajo")) || [];
    trabajos.forEach(function (trabajo, index) {
      let fila = document.createElement("tr"); 
      let datos = `
                  <th scope="row">${trabajo.id}</th>
                  <td>${trabajo.nombre}</td>
                  <td>${trabajo.puesto}</td>
                  <td>${trabajo.tipo}</td>
                  <td>${trabajo.vacantes}</td>
                  <td>
                  <button class="btn btn-info" onclick='irModif(${index})'>Modif</button>
                  <button class="btn btn-danger" onclick='borrarTrabajo(${index})'>X</button>
                  </td>  
                 
  `;
      fila.innerHTML = datos;
  
      cuerpoTabla.appendChild(fila);
    });
  }
  