const on = document.getElementById('on');
const off = document.getElementById('off');
const lampada = document.getElementById('lampada');

function islampbronken() { return lamp.src.indexof('quebrada') > -1 }

function lampon() {
    lampada.src = './img/ligada.jpg';
}

function lampoff() {
    lampada.src = './img/desligada.jpg';
}

function quebrada() { lampada.src = './img/quebrada.jpg' }

on.addEventListener('click', lampon);
off.addEventListener('click', lampoff);
lampada.addEventListener('click',
    quebrada);