let trabajos= JSON.parse(localStorage.getItem("trabajo"))  
let cuerpo= document.querySelector("#contenEmpleos")
const cargaHome= function(){
      trabajos.forEach(function(item,index){
          //  let container=document.createElement("div")
            let datos=`<div class="card col-md-3 mb-4"">
            <div id="imagen " ><img src=${item.logo} class="card-img-top logo" alt="logo"></div>
            <div class="card-body "><h5 class="card-title">${item.nombre} </h5>
            <div class="card-texto"><p>Puesto: ${item.puesto} <br> Ubicacion: ${item.ubicacion}</p></div>
            <p class="card-text"><small class="text-muted">${item.fechaCreacion}</small></p>
            </div>
            <div class="card-footer ">
            <button class="btn btn-outline-danger  onclick="heart()"><i class="fa fa-heart-o"aria-hidden="true"></i></button>
            <button class="btn  btn-outline-success " onclick="verDetalle(${index})"><i class="fa fa-eye"aria-hidden="true"></i></button>
            <button class="btn  btn-outline-primary " onclick="verPostulacion(${index})">Postularse</button>
          </div>
            </div>`
            cuerpo.innerHTML += datos        
            // cuerpo.appendChild(container)
      });
}; 
cargaHome()
let detalle={

}
function verDetalle(index){
  detalle=trabajos[index]
        document.querySelector("#imagenE").src=detalle.imagen
        document.querySelector("#puestoE").innerText=detalle.puesto
        document.querySelector("#tipoE").innerText=detalle.tipo
        document.querySelector("#ubicacionE").innerText=detalle.ubicacion
        document.querySelector("#urlE").innerText=detalle.url
          $('#modalModif').modal('show')
}
function head(){

}

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
