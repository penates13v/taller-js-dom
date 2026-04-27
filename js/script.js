// --- PARTE 2: SELECCIÓN ---
const titulo = document.getElementById("titulo");
const descripcion = document.querySelector(".descripcion");
console.log(titulo, descripcion); // Verificación en consola [cite: 34]

// --- PARTE 3 Y 4: MODIFICAR TÍTULO ---
const btnModificar = document.getElementById("btnModificar");

btnModificar.addEventListener("click", function() {
    titulo.textContent = "¡Título Actualizado!"; // Cambia texto [cite: 39]
    titulo.style.color = "blue";                 // Cambia color [cite: 45]
    titulo.style.fontSize = "30px";             // Cambia tamaño [cite: 46]
    titulo.style.backgroundColor = "yellow";     // Cambia fondo [cite: 47]
});

// --- PARTE 5: ESPEJO DE TEXTO ---
const inputUsuario = document.getElementById("inputUsuario");
const espejo = document.getElementById("espejo");

inputUsuario.addEventListener("keyup", function() {
    espejo.textContent = inputUsuario.value; // Refleja texto en tiempo real [cite: 59]
});

// --- MINI PROYECTO: CONTADOR ---
let contador = 0; // Variable de estado [cite: 68]
const txtNumero = document.getElementById("numero");
const btnAumentar = document.getElementById("aumentar");
const btnDisminuir = document.getElementById("disminuir");

function actualizarPantalla() {
    txtNumero.textContent = contador; // Actualiza el DOM [cite: 71]
    
    // Bonus de colores [cite: 72]
    if (contador > 0) {
        txtNumero.style.color = "green";
    } else if (contador < 0) {
        txtNumero.style.color = "red";
    } else {
        txtNumero.style.color = "black";
    }
}

btnAumentar.addEventListener("click", () => {
    contador++; // Incrementa [cite: 69]
    actualizarPantalla();
});

btnDisminuir.addEventListener("click", () => {
    contador--; // Decrementa [cite: 70]
    actualizarPantalla();
});