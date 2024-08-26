document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");
    const encryptBtn = document.getElementById("encrypt-btn");
    const decryptBtn = document.getElementById("decrypt-btn");
    const copyBtn = document.getElementById("copy-btn");

    // Función para encriptar el texto
    function encryptText(text) {
        const replacements = {
            "e": "enter",
            "i": "imes",
            "a": "ai",
            "o": "ober",
            "u": "ufat"
        };

        return text.replace(/[eioua]/g, function(match) {
            return replacements[match];
        });
    }

    // Función para desencriptar el texto
    function decryptText(text) {
        const replacements = {
            "enter": "e",
            "imes": "i",
            "ai": "a",
            "ober": "o",
            "ufat": "u"
        };

        return text.replace(/enter|imes|ai|ober|ufat/g, function(match) {
            return replacements[match];
        });
    }

    // Verificar si el texto está en minusculas y sin caracteres especiales
    function validateInput(text) {
        if (/[A-Z]/.test(text)) {
            alert("Por favor, ingrese solo letras minúsculas. ");
            return false;
        }
        if (/[^a-z\s]/.test(text)) {
            alert("Por favor, ingrese letras minúsculas y espacios. No se permiten caracteres especiales.");
            return false;
        }
        return true;
    }

    // Eventos de los botones
    encryptBtn.addEventListener("click", function() {
        const text = inputText.value;
        if (validateInput(text)) {
            outputText.value = encryptText(text);
        } else {
            outputText.value = "";
        }
    });

    decryptBtn.addEventListener("click", function() {
        const text = inputText.value;
        if (validateInput(text)) {
            outputText.value = decryptText(text);
        } else {
            outputText.value = "";
        }
    });

    copyBtn.addEventListener("click", function() {
        outputText.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    });
});
