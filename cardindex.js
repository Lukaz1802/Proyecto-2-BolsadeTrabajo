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
            <div class="card-footer">
            <button class="btn btn-danger mx-4"></button>
            <button class="btn btn-primary" onclick="verDetalle(let detalles=localStorage.setItem("detalle",JSON.stringify(item.id)))">Ver</button>
          </div>
            </div>`
            cuerpo.innerHTML += datos        
            //cuerpo.appendChild(container)
      });
}   
​
​
​
 /*detalle={
​
 }*/
/*function verDetalle(index){
      console.log("hola")
     // location.replace("detalle.html")
      let detalles= trabajos[index]
      console.log(detalles)
     let empleo = trabajos.findIndex(function(item){
              return item.id===detalles.id
                   
              
      })
      console.log(empleo)
      console.log(detalles.nombre)
      document.querySelector("#imagen").src=trabajos.imagen
            document.querySelector("#titulo").innerText=trabajos.nombre
            document.querySelector("#logostatic").value=trabajos.logo
            document.querySelector("#puestostatic").value=trabajos.puesto
            document.querySelector("#tipostatic").value=trabajos.tipo
            document.querySelector("#descriptatic").value=trabajos.descripcion
            document.querySelector("#ubistatic").value=trabajos.ubicacion
            document.querySelector("#urlstatic").value=trabajos.url
            document.querySelector("#vacanistatic").value=trabajos.vacantes
            document.querySelector("#fechaC").innerText=trabajos.fechaCreacion
            
​
    
​
}*/
if(cuerpo){
      cargaHome()
}