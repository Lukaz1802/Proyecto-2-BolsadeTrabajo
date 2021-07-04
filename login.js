let usuario = {
    email: "",
    contrasena: "",
}

let usuariosDB = JSON.parse (localStorage.getItem ("usuarios")) || []

const handleChange = function (e) {
    usuario = {
      ...usuario,
      [e.target.name]: e.target.value,
    };
  };
  
const handleSubmit = function (e) {
  e.preventDefault();
  let usuarioVerificado = usuariosDB.find(function (user) {
    return user.email === usuario.email;
  });
  if (usuarioVerificado) {
    if (usuario.contrasena === usuarioVerificado.contrasena) {
      alert("Bienvenido a Tucumán Trabajo!");
      localStorage.setItem("usuario", JSON.stringify(usuarioVerificado));
      location.replace("/index.html")
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  } else {
    alert("Usuario o contraseña incorrectos");
  }
};