let trabajos= JSON.parse(localStorage.getItem("trabajo"))  
let cuerpo= document.querySelector("#contenEmpleos")
const cargaHome= function(){
      trabajos.forEach(function(item,index){
          //  let container=document.createElement("div")
            let datos=`<div class="card col-md-3 mb-4"">
            <div id="imagen " ><img src=${item.logo} class="card-img-top logo" alt="logo"></div>
            <div class="card-body "><h5 class="card-title">${item.nombre} </h5></div>
            <div class="card-texto"><p>Puesto: ${item.puesto} <br> Ubicacion: ${item.ubicacion}</p></div>
            <div class="card-text"><small class="text-muted">${item.fechaCreacion}</small></p></div>
            <div class="card-footer">
            <button class="btn btn-primary" onclick="verDetalle(${item.id})">Ver</button>
          </div>
            </div>`
            cuerpo.innerHTML += datos        
            // cuerpo.appendChild(container)
      });
}; 
cargaHome()