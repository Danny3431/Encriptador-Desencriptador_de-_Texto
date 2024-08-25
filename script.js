function validarTexto(texto) {
    // Acepta solo letras minúsculas sin acentos ni caracteres especiales
    const regex = /^[a-z\s]+$/; 
    return regex.test(texto);
}


function encriptar() {
    const texto = document.getElementById("inputTextoEncriptar").value.toLowerCase();
    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    const textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado("resultadoEncriptar", textoEncriptado);
}

function desencriptar() {
    const texto = document.getElementById("inputTextoDesencriptar").value.toLowerCase();
    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    const textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado("resultadoDesencriptar", textoDesencriptado);
}


function mostrarResultado(elementId, resultado) {
    document.getElementById(elementId).innerText = resultado;
}

function copiarTexto() {
    const resultadoEncriptar = document.getElementById("resultadoEncriptar").innerText;
    const resultadoDesencriptar = document.getElementById("resultadoDesencriptar").innerText;
    const resultado = resultadoEncriptar || resultadoDesencriptar;
    
    if (resultado) {
        navigator.clipboard.writeText(resultado).then(() => {
            alert("Texto copiado al portapapeles");
        });
    } else {
        alert("No hay texto para copiar.");
    }
}
function borrarTexto(elementId) {
    document.getElementById(elementId).value = ''; // Limpia el text area
    mostrarResultado(elementId === 'inputTextoEncriptar' ? 'resultadoEncriptar' : 'resultadoDesencriptar', ''); // Limpia el resultado
}