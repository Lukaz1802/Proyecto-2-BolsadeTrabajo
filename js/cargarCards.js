
// const cargarCard=function(){
//   let cuerpo= document.querySelector("#nombreText")
//       trabajos.forEach(function(item) {
//       let container=document.createElement("div")
//        let datos=`<div class="card mb-3" id="card-imag">
//        <div class="row no-gutters">
//          <div class="col-md-4" >
//            <img src=${item.logo} alt="logo empresa" id="cargarLogo">
//          </div>
//          <div class="col-md-6 offset-1"  >
//            <div class="card-body "id="bodyCard">
//              <h5 class="card-title">${item.nombre}</h5>
//              <p class="card-text">Puesto:${item.puesto}</p>
//              <p>Descripcion: ${item.descripcion}</p>
//              <p>Tipo: ${item.tipo}</p>
//              <p>Ubicación: ${item.ubicacion}</p>
//              <p>Página Web: ${item.url}</p>
//              <p class="card-text"><small class="text-muted">
//              ${item.fechaCreacion}</small></p>
//              <div id="botonPost">
//            <button type="button" class="btn  mb-4 " data-toggle="button" >
//              Postularse  </button></div>
//            </div>
//            </div>
//        </div>
//      </div>`
//      container.innerHTML=datos
//      cuerpo.appendChild(container)        
//       });
// }
// cargarCard()


let trabajos= JSON.parse(localStorage.getItem("trabajo")) || []

const mostrarTrabajos=function() {
    const container = document.querySelector('#nombreText');
    //const row = document.createElement('div');
    //row.className = 'row';
    trabajos.forEach(function (item, index) {
       // let col = document.createElement('div');
       // col.className = 'col-sm-6';
        const card = 
        `<div class="col col-12 col-md-6">
        <div class="card m-2" id="card">
        <div class="row largeCard">
        <div class="col-md-4" id="card-logo">
        <img src=${item.logo}  alt="logo empresa" id="imagen">
        </div>
        <div class="col car-bod">
        <div class="card-body ">
          <h5 class="card-title">${item.nombre}</h5>
          <p class="card-text">Descripcion: ${item.descripcion}</p>
          <p class="card-text"><small class="text-muted">${item.fechaCreacion}</small></p>
          <div  id="botoneyes">
                     <button type="button" class="btn  mb-4 mt-3" data-toggle="button" onclick="verPostulacion(${index})" >
                      Postularse </button></div>
            <div >
         </div>
      </div>
      </div>
    </div>
  </div>
  </div>
        `;
        container.innerHTML += card
       // col.innerHTML = card;
        //row.appendChild(col);
        //container.appendChild(card);
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