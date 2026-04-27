// Seleccionamos por ID y por Clase [cite: 28]
const titulo = document.getElementById("titulo");
const descripcion = document.querySelector(".clase"); // También podrías usar .descripcion [cite: 28]

console.log(titulo);
console.log(descripcion);
const boton = document.getElementById("btnModificar");

boton.addEventListener("click", function() { 
    // Cambio de texto [cite: 37, 39]
    titulo.textContent = "¡Texto Cambiado!"; 

    // Cambio de estilos [cite: 42, 44]
    titulo.style.color = "blue";
    titulo.style.fontSize = "30px"; 
    titulo.style.backgroundColor = "yellow"; // Cambia el fondo [cite: 47]
});
const input = document.getElementById("inputUsuario");
const espejo = document.getElementById("espejo");

input.addEventListener("keyup", function() { 
    espejo.textContent = input.value; 
});
let contador = 0; [cite: 68]
const txtNumero = document.getElementById("numero");
const btnAumentar = document.getElementById("aumentar");
const btnDisminuir = document.getElementById("disminuir");

// Función para actualizar el DOM y el color (Bonus) [cite: 71, 72]
function actualizarPantalla() {
    txtNumero.textContent = contador; 
    
    if (contador > 0) {
        txtNumero.style.color = "green"; 
    } else if (contador < 0) {
        txtNumero.style.color = "red"; 
    } else {
        txtNumero.style.color = "black"; 
    }
}

btnAumentar.addEventListener("click", () => {
    contador++; 
    actualizarPantalla();
});

btnDisminuir.addEventListener("click", () => {
    contador--; 
    actualizarPantalla();
});
