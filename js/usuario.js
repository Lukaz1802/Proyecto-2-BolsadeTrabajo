let  trabajos= JSON.parse(localStorage.getItem("trabajo")) 
let tabla=document.querySelector("#tdobyCuerpo")
let postulaciones=JSON.parse(localStorage.getItem("postulaciones"))
 const listaPostulaciones= function(){ 
      tabla.innerHTML=" "
      if(postulaciones!==null){
            postulaciones.forEach(function(empleo,index){
                  let fila=document.createElement("tr")
                  let cuerpo= `<th scope="row" ></th>
                  <td scope="col">${empleo.nombre}</td>
                  <td scope="col">${empleo.puesto}</td>
                  <td scope="col">${empleo.tipo}</td>
                 `
                 fila.innerHTML=cuerpo
                 tabla.appendChild(fila)
           });
      }else{
            alert("No hay postulaciones")
      }
      }
      
listaPostulaciones()