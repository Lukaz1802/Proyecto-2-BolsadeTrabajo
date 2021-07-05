
let trabajos= JSON.parse(localStorage.getItem("trabajo")) || []

const mostrarTrabajos=function() {
    const container = document.querySelector('#nombreText');
    trabajos.forEach(function (item, index) {
        const card = `
        <div class="col col-12 col-md-6">
          <div class="card m-2" id="card">
            <div class="row largeCard">
              <div class="col-md-4" id="card-logo">
                <img src=${item.logo}  alt="logo empresa" id="imagen">
              </div>
            <div class="col car-bod">
              <div class="card-body ">
                <h5 class="card-title">${item.nombre}</h5>
                  <p class="card-text">Puesto:${item.puesto}</p>
                  <p>Descripcion: ${item.descripcion}</p>
                  <p>Tipo: ${item.tipo}</p>
                  <p>Ubicación: ${item.ubicacion}</p>
                  <p>Página Web: ${item.url}</p>
                  <p class="card-text"><small class="text-muted">
                    ${item.fechaCreacion}</small></p>
                  <div  id="botoneyes">
                    <button type="button" class="btn  mb-4 mt-3" data-toggle="button" onclick="verPostulacion(${index})" >
                      Postularse </button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
        ;
        container.innerHTML += card
    });
    
}
mostrarTrabajos()

function verPostulacion(index){
    let  postulacion=trabajos[index];
      let postulaciones=JSON.parse(localStorage.getItem("postulaciones"));
      if(postulaciones===null){
            postulaciones=[]
      }
      postulaciones.push(postulacion)
      $('#modalPost').modal('show');
      localStorage.setItem("postulaciones",JSON.stringify(postulaciones));
}
verPostulacion()