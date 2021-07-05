
let trabajos= JSON.parse(localStorage.getItem("trabajo")) || []

//Creo la estrcuctuarque es un objecto donde guardare un empleo creado
 let trabajo = {
      id: "",
      tipo:"",
      nombre:"",
      logo:"",
      imagen:"https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg",
      puesto:"",
      descripcion:"",
      url:"",
      vacantes:"",
      fechaCreacion:"",
      ubicacion:""

 }
 //Utilizo el form de formulario y el de la lista donde hacen la misma fuction
 const handleChange=function (e){
     
        trabajo={
              ...trabajo,
            [e.target.name]: e.target.value      
        }
 }
 //Captura el form del formulario para hacer el reset() de los campos
 let formulario = document.querySelector("form");
//Funccion de onsubmit validando los datos al hacer click 
 const handleSubmit= function(e){
      e.preventDefault();
       if(trabajo.tipo && trabajo.nombre && trabajo.logo && trabajo.puesto && trabajo.descripcion && trabajo.url && trabajo.vacantes && trabajo.ubicacion){
             
           if(!isNaN (parseInt(trabajo.vacantes))){
                 if(trabajo.vacantes>0){
                   trabajo.id=new Date().getTime()
                   trabajo.fechaCreacion=new Date().toLocaleString()
                  trabajos.push(trabajo)
                  localStorage.setItem("trabajo",JSON.stringify(trabajos))
                   alert("Se cargaron correctamente los datos") 
                     formulario.reset()
                 }
                 else{
                       alert("Vacante tiene que ser mayor que 0")
                 }  
           }
           else{
                 alert("El valor del campo 'vacantes' no es valido")
           }               
      }
      else{
            alert("Faltan datos")
      }
 }
//function para cargar la tabla de empleos previamente cargado en el formulario
let tabla=document.querySelector("#tdobyCuerpo")
 const listaEmpleos= function(){ 
      tabla.innerHTML=""
      trabajos= JSON.parse(localStorage.getItem("trabajo")) || []
     
      trabajos.forEach(function(empleo,index){
             let fila=document.createElement("tr")
             let cuerpo= `<th scope="row" >${empleo.id}</th>
             <td scope="col">${empleo.nombre}</td>
             <td scope="col">${empleo.ubicacion}</td>
             <td scope="col">${empleo.fechaCreacion}</td>
            <td scope="col"><button class="btn btn-edit" onclick="verEmpleo(${index})"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> </button></td>
            <td scope="col"><button class="btn btn-trash " onclick="eliminarEmpleo(${index})"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>`
            fila.innerHTML=cuerpo
            tabla.appendChild(fila)
      });
 }

//listaEmpleos()
 
// colcando el objecto seleccionado en un modal donde se vera visualmente todos los datos de mismo objecto
 function verEmpleo(index){
       trabajo=trabajos[index]
      document.querySelector("#nameEmpleo").innerText= trabajo.id
      document.querySelector("#logoEntr").value=trabajo.logo
      document.querySelector("#nameEntr").value=trabajo.nombre
      document.querySelector("#tipoEntr").value=trabajo.tipo
      document.querySelector("#ubiEntr").value=trabajo.ubicacion
      document.querySelector("#imgEntr").value=trabajo.imagen
      document.querySelector("#puestoEntr").value=trabajo.puesto
      document.querySelector("#descripEntr").value=trabajo.descripcion
      document.querySelector("#urlEntr").value=trabajo.url
      document.querySelector("#vacanEntr").value=trabajo.vacantes
      
       $('#modalModif').modal('toggle')
 }
//Function omsubmit de la lista de empleos que permite modificar el objecto seleccionado
 const updateEmpleo=function(e){
       e.preventDefault()
      let index= trabajos.findIndex(function(item){
           return  item.id===trabajo.id
       })
       if(!isNaN(parseInt(trabajo.vacantes))){
             if(trabajo.vacantes>0){
                  trabajos.splice(index,1,trabajo)
                 
                  localStorage.setItem("trabajo",JSON.stringify(trabajos))
                  listaEmpleos()
                  //cuando selecciono actualizar el modal se me va a cerrar
                  $('#modalModif').modal('hide')
             }
             else{
                   alert("Vacantes tiene que ser mayor a 0")
             }
       }else{
             alert("Ingrese valores numericos")
       }
       
 }
// function que elimina el objecto seleccionado
 function eliminarEmpleo(id){
       trabajo=trabajos[id]
     let validar=confirm(`Esta seguro que quiere eliminar el empleo?\n\nID: ${trabajo.id}\nEmpresa: ${trabajo.nombre}\nPuesto: ${trabajo.puesto}`)
     if(validar){
           trabajos.splice(id,1)
           localStorage.setItem("trabajo",JSON.stringify(trabajos))
           alert(`La publicación:\n\nID: ${trabajo.id}\nEmpresa: ${trabajo.nombre}\nPuesto: ${trabajo.puesto}\n\nSe ha eliminado correctamente.`)
           listaEmpleos()
     } 
 }
//Para que se ejecute la lista de empleo sin problemas porque comparto el mismo js 
 if(tabla){
      listaEmpleos() 
 }