const title = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#formulario');

//const parrafo = document.querySelector('p');
//const parrafito = document.querySelector('.parrafito');
//const pid = document.querySelector('#id');
//const pList = document.querySelectorAll('p');
/*
console.log({title});
console.log(input.value);
console.log({
    title,
    parrafo,
    parrafito,
    pid,
    input
});

console.log(pList);

//title.innerHTML = 'Tu si eres pato';
//title.setAttribute('class', 'rojo');

title.classList.add('azul');
title.classList.remove('verde');

//input.value = "meteme numeros papi";

const img = document.createElement('img');
img.setAttribute('src', 'https://png.pngitem.com/pimgs/s/10-105564_clip-art-formato-png-transparent-background-homer-simpson.png');
console.log(img);
pid.innerHTML = "";
pid.append(img);
*/

form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
    event.preventDefault();
    pResult.innerHTML = " "
    pResult.append(+input1.value + +input2.value);
}

