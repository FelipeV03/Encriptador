console.log('Ola :)');
console.log('%cMi GitHub: https://github.com/FelipeV03', 'color: #0b6db3; font-size: 18px; font-weight: bold;');



// console.log("%c Archivo index.js cargado", "color: red ; font-size: 18px;");
// Esta funcion se utiliza para que el textarea tenga un salto de linea al dalr click al textarea
function addLineBreak() {
    const textarea = document.getElementById('myTextarea');
    const value = textarea.value;
    textarea.value = value + "\n";
}


// Esta funcion es la que nos permite encriptar nuestro texto
function encriptar() {
    // Aqui limpiamos los textos que se encuentran en los divs de encriptado y desencriptado para que no se acumulen
    const encriptedTextElement = document.getElementById('encripted-text');
    const decryptedTextElement = document.getElementById('decrypted-text');
    encriptedTextElement.textContent = '';
    decryptedTextElement.textContent = '';

    // Aqui obtenemos el texto que se encuentra en el textarea y lo guardamos en una variable para lugo encriptarlo
    let texto = document.getElementById('myTextarea').value.trim();
    let textoEncriptado = texto.toLowerCase()
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/\bi\b/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Aqui mostramos el texto encriptado en el div correspondiente y lo guardamos en una variable para luego copiarlo al portapapeles
    document.getElementById('encripted-text').textContent = textoEncriptado;
    // console.log('Este es el texto encriptado: ' + textoEncriptado);

    // Aqui limpiamos el textarea luego de encriptar el texto
    document.getElementById('myTextarea').value = '';

    // Aqui ocultamos el texto que se encuentra en el card-body para que no se vea el texto original al encriptar
    document.querySelector('.card-img-top').style.display = 'none';
    document.querySelector('.card-title').style.display = 'none';
    document.querySelector('.card-text').style.display = 'none';

    return textoEncriptado;
}


// Esta funcion es la que nos permite desencriptar nuestro texto
function desencriptar() {
    // Aqui limpiamos los textos que se encuentran en los divs de encriptado y desencriptado para que no se acumulen
    const encriptedTextElement = document.getElementById('encripted-text');
    const decryptedTextElement = document.getElementById('decrypted-text');
    encriptedTextElement.textContent = '';
    decryptedTextElement.textContent = '';

    // Aqui obtenemos el texto que se encuentra en el textarea y lo guardamos en una variable para lugo desencriptarlo
    let textoEncriptado = document.getElementById('myTextarea').value.trim();
    let textoDesencriptado = textoEncriptado
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Aqui mostramos el texto desencriptado en el div correspondiente y lo guardamos en una variable para luego copiarlo al portapapeles
    document.getElementById('decrypted-text').textContent = textoDesencriptado;
    // console.log('Este es el texto desencriptado: ' + textoDesencriptado);

    // Aqui limpiamos el textarea luego de desencriptar el texto
    document.getElementById('myTextarea').value = '';

    // Aqui ocultamos el texto que se encuentra en el card-body para que no se vea el texto encriptado al desencriptar
    document.querySelector('.card-img-top').style.display = 'none';
    document.querySelector('.card-title').style.display = 'none';
    document.querySelector('.card-text').style.display = 'none';

    return textoDesencriptado;
}


// Esto de aca es lo que nos ayuda a copiar el texto encriptado o desencriptado al portapapeles
const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', function () {

    // Aca obtenemos el texto que se encuentra en el div de encriptado o desencriptado y lo guardamos en una variable para luego copiarlo al portapapeles
    const encriptedText = document.getElementById('encripted-text').textContent;
    const decryptedText = document.getElementById('decrypted-text').textContent;

    // Aca es donde copiamos el texto al portapapeles y luego lo pegamos en el textarea para que el usuario pueda copiarlo
    const textToCopy = encriptedText || decryptedText;
    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    // alert('Texto copiado al portapapeles');

    // Aca es donde cambiamos el texto y el icono del boton de copiar al portapapeles cuando se copia el texto al portapapeles y luego lo volvemos a cambiar a su estado original despues de 1 segundo
    const copyButton = document.getElementById('copy-button');
    const originalButtonText = copyButton.innerHTML;
    copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg> Copiado';
    copyButton.classList.add('copied');

    // Aqui volvemos a cambiar el texto y el icono del boton de copiar al portapapeles a su estado original despues de 1 segundo
    setTimeout(function () {
        copyButton.innerHTML = originalButtonText;
        copyButton.classList.remove('copied');
    }, 1000);
});
