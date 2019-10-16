const aceptar = document.getElementById('aceptar');
const salir = document.getElementById('salir');
const root = document.getElementById('root');
const options = document.getElementById('options');
const cifrado = document.getElementById('cifrado');
const cifResult = document.getElementById('cifResult');
const descifrado = document.getElementById('descifrado');
const descifResult = document.getElementById('descifResult');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const cifrar = document.getElementById('cifrar');
const descifrar = document.getElementById('descifrar');
const inicio1 = document.getElementById('inicio1');
const inicio2 = document.getElementById('inicio2');
const return1 = document.getElementById('return1');
const return2 = document.getElementById('return2');

root.classList.remove('hide');

aceptar.addEventListener('click', () => {
  root.classList.add('hide');
  options.classList.remove('hide');
});

salir.addEventListener('click', () => {
  window.close();
});

cifrar.addEventListener('click', () => {
  options.classList.add('hide');
  cifrado.classList.remove('hide');
});

encriptar.addEventListener('click', () => {
  cifrado.classList.add('hide');
  cifResult.classList.remove('hide');
  const string = document.getElementById('texto').value;
  const offset = document.getElementById('desplazamiento').value;
  window.cipher.encode(offset, string);
  document.getElementById('textoCifrado').innerHTML = window.cipher.encode(offset, string);
});

inicio1.addEventListener('click', () => {
  cifResult.classList.add('hide');
  root.classList.remove('hide');
  document.getElementById('nombre').value = '';
  document.getElementById('dni').value = '';
  document.getElementById('telf').value = '';
  document.getElementById('mail').value = '';
  document.getElementById('desplazamiento').value = '';
  document.getElementById('texto').value = '';
  document.getElementById('desplazamiento2').value = '';
  document.getElementById('texto2').value = '';
});

return1.addEventListener('click', () => {
  cifResult.classList.add('hide');
  cifrado.classList.remove('hide');
});

descifrar.addEventListener('click', () => {
  options.classList.add('hide');
  descifrado.classList.remove('hide');
});

desencriptar.addEventListener('click', () => {
  descifrado.classList.add('hide');
  descifResult.classList.remove('hide');
  const string = document.getElementById('texto2').value;
  const offset = document.getElementById('desplazamiento2').value;
  window.cipher.decode(offset, string);
  document.getElementById('textoDescifrado').innerHTML = window.cipher.decode(offset, string);
});

inicio2.addEventListener('click', () => {
  descifResult.classList.add('hide');
  root.classList.remove('hide');
  document.getElementById('desplazamiento2').value = '';
});

return2.addEventListener('click', () => {
  descifResult.classList.add('hide');
  descifrado.classList.remove('hide');
});

const copiar1 = document.getElementById('copiar1');
copiar1.addEventListener('click', () => {
  // Crea un campo de texto "oculto"
  const aux = document.createElement('input');
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute('value', document.getElementById('textoCifrado').innerHTML);
  // Añade el campo a la página
  document.body.appendChild(aux);
  // Selecciona el contenido del campo
  aux.select();
  // Copia el texto seleccionado
  document.execCommand('copy');
  // Elimina el campo de la página
  document.body.removeChild(aux);
});

const copiar2 = document.getElementById('copiar2');
copiar2.addEventListener('click', () => {
  // Crea un campo de texto "oculto"
  const aux = document.createElement('input');
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute('value', document.getElementById('textoDescifrado').innerHTML);
  // Añade el campo a la página
  document.body.appendChild(aux);
  // Selecciona el contenido del campo
  aux.select();
  // Copia el texto seleccionado
  document.execCommand('copy');
  // Elimina el campo de la página
  document.body.removeChild(aux);
});
