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
             <label>ID de empleo:</label>
             <p id="idEmpleo">${item.id}</p>
             <p class="card-text"><small class="text-muted">
             ${item.fechaCreacion}</small></p>
             <div id="botonPost">
           <button type="button" class="btn  mb-4 " data-toggle="button" onclick="agregarPostulante()">
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

const agregarPostulante=function(){
  let idEmpleo = document.getElementsByTagName('p')[5].innerHTML;

  console.log(idEmpleo);
  for (i=0; i < trabajos.length; i++) {
    console.log(trabajos[i].id)
    console.log(idEmpleo)
    if(trabajos[i].id == idEmpleo ){
      console.log(trabajos[i].vacantes)
      if(trabajos[i].vacantes>0){
        trabajos[i].postulantes.push(usuario.id);
        localStorage.setItem("trabajo",JSON.stringify(trabajos))
        alert(`Se cargaron correctamente los datos\n\nTe has postulado correctamente en el empleo ${idEmpleo}`) 
      }else{
            alert("Vacante tiene que ser mayor que 0")
      }
    }
  }
}

/*
Falta:
validar que no duplique postulacion
let idEmpleo capture el id correspondiente a la card que se desa postular

*/
agregarPostulante()