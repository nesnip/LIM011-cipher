const aceptar = document.getElementById('aceptar');
const rechazar = document.getElementById('rechazar');
const root = document.getElementById('root');
const options = document.getElementById('options');
const cifrado = document.getElementById('cifrado');
const cifResult = document.getElementById('cifResult');
const descifrado = document.getElementById('descifrado');
const descifResult = document.getElementById('descifResult');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');

root.classList.remove('hide');

aceptar.addEventListener('click', () => {
    root.classList.add('hide');
    options.classList.remove('hide');
});

cifrar.addEventListener('click', () => {
    options.classList.add('hide');
    cifrado.classList.remove('hide');
});

encriptar.addEventListener('click', () => {
    cifrado.classList.add('hide');
    cifResult.classList.remove('hide');
    let string = document.getElementById('texto').value;
    let offset = document.getElementById('desplazamiento').value;
    window.cipher.encode(offset, string, nombre);
    document.getElementById('textoCifrado').innerHTML = window.cipher.encode(offset, string);
});

descifrar.addEventListener('click', () => {
    options.classList.add('hide');
    descifrado.classList.remove('hide');
});

desencriptar.addEventListener('click', () => {
    descifrado.classList.add('hide');
    descifResult.classList.remove('hide');
    let string = document.getElementById('texto2').value;
    let offset = document.getElementById('desplazamiento2').value;
    window.cipher.decode(offset, string);
    document.getElementById('textoDescifrado').innerHTML = window.cipher.decode(offset, string);
});

inicio1.addEventListener('click', () => {
    cifResult.classList.add('hide');
    root.classList.remove('hide');
});

inicio2.addEventListener('click', ()=>{
    descifResult.classList.add('hide');
    root.classList.remove('hide');
});