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
                 <td scope="col"><button class="btn btn-trash " onclick="eliminarEmpleo(${index})"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>`
                 fila.innerHTML=cuerpo
                 tabla.appendChild(fila)
           });
      
      }else{

            alert("No hay postulaciones")
      }
      }

listaPostulaciones()

trabajo={}
function eliminarEmpleo(id){
      trabajo=trabajos[id]
    let validar=confirm(`Esta seguro que quiere eliminar de su lista de postulaciones?\n\nID: ${trabajo.id}\nEmpresa: ${trabajo.nombre}\nPuesto: ${trabajo.puesto}`)
    if(validar){
          trabajos.splice(id,1)
          localStorage.setItem("trabajo",JSON.stringify(trabajos))
          alert(`La publicación:\n\nID: ${trabajo.id}\nEmpresa: ${trabajo.nombre}\nPuesto: ${trabajo.puesto}\n\nSe ha eliminado correctamente.`)
          listaEmpleos()
    } 
}