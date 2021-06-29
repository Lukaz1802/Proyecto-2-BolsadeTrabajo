let usuario=JSON.parse(localStorage.getItem('usuario')) || null

let linkAdmin= document.querySelector('linkAdmin')

if(!usuario){
    document.querySelector('body').innerHTML=`
    <div class='alert alert-danger' role="alert">No se encuentra logueado</div>
    `
    setTimeout(function(){
        location.replace('/login.html')
    },2000);
}else{
    if(usuario.email==='admin@gmail.com'){
        linkAdmin.innerHTML=`
        <a class="nav-link" href="/admin.html">Administrador</a>`
    }
}

const deslogueo=function(){
    localStorage.setItem('usuario',null);
    location.replace('/login.html');
}