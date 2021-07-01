function filterEmpleos(){

    let texto = document.querySelector('#empleoBuscar')
    empleos=JSON.parse(localStorage.getItem('empleos'))
  
    empleos=empleos.filter(function(empleo){
   return empleo.nombre.indexOf(texto.value.toUpperCase()) > - 1;
    })
  texto.value = "";
  texto.focus();
  contarEmpleos(empleos)
    cargarEmpleos(tablaEmpleos);
  }