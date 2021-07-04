let detalles=localStorage.getItem("detalle") || null


if(detalles){
      document.querySelector("#imagen").src=detalles.imagen
      document.querySelector("#titulo").innerText=detalles.nombre
      document.querySelector("#puestostatic").value=detalles.puesto
      document.querySelector("#logostatic").value=detalles.logo
      document.querySelector("#tipostatic").value=trabajos.tipo
      document.querySelector("#descriptatic").value=trabajos.descripcion
      document.querySelector("#ubistatic").value=trabajos.ubicacion
      document.querySelector("#urlstatic").value=trabajos.url
      document.querySelector("#vacanistatic").value=trabajos.vacantes
      document.querySelector("#fechaC").innerText=trabajos.fechaCreacion

}

