let trabajos= JSON.parse(localStorage.getItem("trabajo")) || [];

function cargarCards(index){
    trabajo=trabajo[index]
        document.querySelector("#cardImagen").value=trabajo.logo
    
}