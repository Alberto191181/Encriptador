function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

document.getElementById('encriptarBtn').addEventListener('click', () => {
    let texto = document.getElementById('inputTexto').value;
    let resultado = encriptar(texto);
    document.getElementById('resultado').value = resultado;
});

document.getElementById('desencriptarBtn').addEventListener('click', () => {
    let texto = document.getElementById('inputTexto').value;
    let resultado = desencriptar(texto);
    document.getElementById('resultado').value = resultado;
});

document.getElementById('copiarBtn').addEventListener('click', () => {
    let texto = document.getElementById('resultado').value;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
    });
});
