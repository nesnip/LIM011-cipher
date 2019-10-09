const aceptar = document.getElementById('aceptar');
const rechazar = document.getElementById('rechazar');
const root = document.getElementById('root');
const options = document.getElementById('options');
const cifrado = document.getElementById('cifrado');
const cifResult = document.getElementById('cifResult');

aceptar.addEventListener('click', ()=>{
    root.classList.add('hide');
    options.classList.remove('hide');
})

cifrar.addEventListener('click', ()=>{
    options.classList.add('hide');
    cifrado.classList.remove('hide');
})

code.addEventListener('click', ()=>{
    cifrado.classList.add('hide');
    cifResult.classList.remove('hide');
})