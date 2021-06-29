let usuarios = JSON.parse (localStorage.getItem ("usuarios"))

let usuario = {
    id: new Date().getTime(),
    email: "",
    contrasena: "",
    nombre: "",
    fotoPerfil:"https://trello-attachments.s3.amazonaws.com/60cd297278ca8b6a51822e5b/60cd2be7dc6a0a3f6a647da8/50fccacaad737acf44bb32b90e144175/trabajostuc-logo.png",
};

let formulario = document.querySelector("form")

const handleChange = function (e) {
    usuario = {
      ...usuario,
      [e.target.name]: e.target.value,
    };
  };

  const handleSubmit = function (e) {
    e.preventDefault();
  
    if (usuario.nombre && usuario.email && usuario.contrasena) {
      usuarios.push(usuario);
      swal("Bien!", "Te has registrado correctamente!. Revisa tu casilla de correo", "success");
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      formulario.reset();
  
      //traer los campos de la card con los datos a mostrar
      document.querySelector("#name").innerText = usuario.nombre;
      document.querySelector("#correo").innerText = usuario.email;
      document.querySelector(".img_card").src = usuario.fotoPerfil;
    }
  };

  function enviarMail(){
    let templateParams = {
      from_name: 'Registro',
      user_name: `${usuario.nombre}`,
      destinatario:`${usuario.email}`,
      message:`Gracias por registrarte en Tucumán trabajos! Ingresa al sitio con tu email y contraseña. Tu mail de inicio de sesion es: ${usuario.email} y tu contraseña: ${usuario.contrasena}`

  };  
   
  emailjs.send('service_i9v673l', 'template_srpyggu', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });}