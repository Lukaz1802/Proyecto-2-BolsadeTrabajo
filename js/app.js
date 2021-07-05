let usuario=JSON.parse(localStorage.getItem('usuario')) || null
let linkAdmin= document.querySelector('#linkAdmin')
let linkForm= document.querySelector('#linkForm')
let log= document.querySelector('#login-out')
let linkUser= document.querySelector('#linkUser')
let usuariosDB = JSON.parse (localStorage.getItem ("usuarios")) || []


if(!usuario){
  log.innerHTML=`
  <a class="nav-link text-white" href="./login.html">Login</a>`
  linkAdmin.innerHTML=`
  `
}else{
  if(usuario.email==='admin@gmail.com'){
    linkAdmin.innerHTML=`
    <a class="nav-link text-white" href="./admin.html">Admin</a>
    `
    linkForm.innerHTML=`
    <a class="nav-link text-white" href="./formulario.html">Agregar Empleos</a>
    `
    log.innerHTML=`
    <button type="button" class="btn btn-info btnLogout" onclick="deslogueo()">Logout</button>
    `
  }else{
    let usuarioVerificado = usuariosDB.find(function (user) {
      return user.email === usuario.email;
    });
      if (usuarioVerificado) {
        if (usuario.contrasena === usuarioVerificado.contrasena) {
          linkUser.innerHTML=`
          <a class="nav-link text-white" href="./usuario.html">Mi espacio</a>
          `
          log.innerHTML=`
          <button type="button" class="btn btn-info btnLogout" onclick="deslogueo()">Logout</button>
          `
      }
    }
  }
}

const deslogueo = function () {
  localStorage.setItem("usuario", null);
  location.replace("/index.html")
  log.innerHTML=`
  <a class="nav-link text-white" href="./login.html"></a>`  
};