let trabajos= JSON.parse(localStorage.getItem("trabajo"))
const cargarCard=function(){
  let cuerpo= document.querySelector("#nombreText")
      trabajos.forEach(function(item) {
      let container=document.createElement("div")
       let datos=`<div class="card mb-3" id="card-imag">
       <div class="row no-gutters">
         <div class="col-md-4" >
           <img src=${item.logo} alt="logo empresa" id="cargarLogo">
         </div>
         <div class="col-md-6 offset-1"  >
           <div class="card-body "id="bodyCard">
             <h5 class="card-title">${item.nombre}</h5>
             <p class="card-text">Puesto:${item.puesto}</p>
             <p>Descripcion: ${item.descripcion}</p>
             <p>Tipo: ${item.tipo}</p>
             <p>Ubicación: ${item.ubicacion}</p>
             <p>Página Web: ${item.url}</p>
             <p class="card-text"><small class="text-muted">
             ${item.fechaCreacion}</small></p>
             <div id="botonPost">
           <button type="button" class="btn  mb-4 " data-toggle="button" >
             Postularse  </button></div>
           </div>
           </div>
       </div>
     </div>`
     container.innerHTML=datos
     cuerpo.appendChild(container)        
      });
}
cargarCard()