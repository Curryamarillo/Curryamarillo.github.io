let inputFrase = document.getElementById("codificar");
let frase = document.getElementById("input-frase");
let respuestaHTML = document.getElementById("frase-codificada")
const clave = 3;
function codificador() {
    let palabraCodificada = "";
    let fraseIngresada = frase.value.toUpperCase();
    
    for (let i = 0; i < fraseIngresada.length; i++) {
        let codigo = fraseIngresada.charCodeAt(i);

        if (codigo >= 65 && codigo <= 90) {
            let charCodificado = codigo + clave;
            
            if (charCodificado > 90) {
                charCodificado -= 26;
            }
            
            palabraCodificada += String.fromCharCode(charCodificado);
        } else {

            palabraCodificada += fraseIngresada[i];
        }
    }
    respuestaHTML.innerHTML = `<li>Frase codificada: ${palabraCodificada}</li>`;
}

inputFrase.addEventListener("click", (e) => {
    e.preventDefault();
    codificador();
});
