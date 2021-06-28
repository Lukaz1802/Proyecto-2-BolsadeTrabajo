/*La aplicación deberá contener:
● Formulario de registro de empleos. El mismo deberá contener:
○ id (generado automáticamente)
○ tipo (fulltime, part-time)
○ nombre de la empresa
○ logo de la empresa (imagen)
○ imagen de la empresa (opcional, sino colocar una por defecto)
○ título del puesto
○ descripcion
○ url de la empresa
○ vacante*/
 
let trabajos= JSON.parse(localStorage.getItem("trabajo")) || []


 let trabajo = {
      id: new Date().getTime(),
      tipo:"",
      nombre:"",
      logo:"",
      imagen:"",
      puesto:"",
      descripcion:"",
      url:"",
      vacantes:"",
 }

           
 
 const handleChange=function (e){
      document.querySelector("#idText").value=trabajo.id
        trabajo={
              ...trabajo,
            [e.target.name]: e.target.value
              
        }
 }
 let formulario = document.querySelector("form");

 const handleSubmit= function(e){
       console.log("hola")
      e.preventDefault();
       if(trabajo.tipo && trabajo.nombre && trabajo.logo && trabajo.puesto && trabajo.descripcion && trabajo.url && trabajo.vacantes){
             
           if(!isNaN (parseInt(trabajo.vacantes))){
            if(!trabajo.imagen){
                 trabajo.imagen="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg"
              }
              trabajos.push(trabajo)
              localStorage.setItem("trabajo",JSON.stringify(trabajos))
               alert("Se cargaron correctamente los datos") 
               formulario.reset(); 
           }
           else{
                 alert("El valor del campo 'vacantes' no es valido")
           }
               
            
      }
      else{
            alert("Faltan datos")
      }

 }
