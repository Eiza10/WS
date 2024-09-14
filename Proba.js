
const enviarBtn = document.getElementById("enviarBtn");
const inputNombre = document.getElementById("nombre");
const saludo = document.getElementById("saludo");

document.addEventListener('DOMContentLoaded', function () {
// Agregamos un evento para el botón de envío
enviarBtn.addEventListener("click", function() {
    const nombreIntroducido = inputNombre.value; // Obtenemos el valor del campo de texto
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');

    if (nombreIntroducido) { // Verificamos que se haya introducido un nombre
        if (nombreIntroducido == "video1"){
            videoSource.src = "D:\Videos\Valorant\video1"
            
        }else if (nombreIntroducido == "video2"){
            videoSource.src = "D:\Videos\Valorant\video2"
        }
        saludo.textContent = "Play " + nombreIntroducido; // Mostramos el saludo
    } else {
        saludo.textContent = "Por favor, introduce un nombre"; // Mensaje si el campo está vacío
    }
    videoPlayer.load();
    videoPlayer.play();
});
});