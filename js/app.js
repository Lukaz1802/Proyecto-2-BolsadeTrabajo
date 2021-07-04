let usuario=JSON.parse(localStorage.getItem('usuario')) || null
let linkAdmin= document.querySelector('#linkAdmin')
let log= document.querySelector('#login-out')
let usuariosDB = JSON.parse (localStorage.getItem ("usuarios")) || []
let usuarioVerificado = usuariosDB.find(function (user) {
  return user.email === usuario.email;
});

if(!usuario){
  log.innerHTML=`
  <a class="nav-link text-white" href="./login.html">Login</a>
  `
  linkAdmin.innerHTML=`
  `
}else{
  if(usuario.email==='admin@gmail.com'){
    linkAdmin.innerHTML=`
    <a class="nav-link text-white" href="./formulario.html">Agregar Empleos</a>
    `
    log.innerHTML=`
    <button type="button" class="btn btn-primary" onclick="deslogueo()">Logout</button>
    `
  }else{
      if (usuarioVerificado) {
        if (usuario.contrasena === usuarioVerificado.contrasena) {
          log.innerHTML=`
          <button type="button" class="btn btn-primary" onclick="deslogueo()">Logout</button>
          `
      }
    }
  }
}

const deslogueo = function () {
  localStorage.setItem("usuario", null);
  location.replace("/index.html")
  log.innerHTML=`
    <a class="nav-link text-white" href="./login.html">Login</a>
    `
};