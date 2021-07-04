if(usuario===null || usuario.email!=='admin@gmail.com'){
    document.querySelector('body').innerHTML=`
    <div class="alert alert-danger" role="alert">
    Necesitas loguearte para realizar esta accion
    </div>
    `
    setTimeout(function(){
    location.replace('/index.html')
    },2000)
}else{
  linkAdmin.innerHTML=`
  <a class="nav-link text-white" href="./admin.html">Admin</a>
  `
  linkForm.innerHTML=`
  <a class="nav-link text-white" href="./formulario.html">Agregar Empleos</a>
  `
  log.innerHTML=`
  <button type="button" class="btn btn-primary" onclick="deslogueo()">Logout</button>
  `
}