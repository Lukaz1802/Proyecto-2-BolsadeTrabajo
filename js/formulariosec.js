let usuario=JSON.parse(localStorage.getItem('usuario')) || null
let linkAdmin= document.querySelector('#linkAdmin')
let log= document.querySelector('#login-out')

if(usuario.email!=='admin@gmail.com'){
    document.querySelector('body').innerHTML=`
    <div class="alert alert-danger" role="alert">
    Necesitas loguearte para realizar esta accion
    </div>
    `
    setTimeout(function(){
      location.replace('/login.html')
    },2000)
}else{
    linkAdmin.innerHTML=`
    <a class="nav-link text-white" href="./formulario.html">Agregar Empleos</a>
    `
    log.innerHTML=`
    <button type="button" class="btn btn-primary" onclick="deslogueo()">Logout</button>
    `
}

const deslogueo = function () {
    //e.preventDefault();
    localStorage.setItem("usuario", null);
    location.replace("/index.html")
    log.innerHTML=`
      <a class="nav-link text-white" href="./login.html">Login</a>
      `
  };