const lampada=document.getElementById('lampada');
const ligar=document.getElementById('ligar');
const desligar=document.getElementById('desliga');


function ligando(){
    lampada.src = './img/ligada.jpg';
    
}
function desligando (){
    lampada.src = './img/desligada.jpg';
    
}
function quebrar(){
    lampada.src = './img/quebra.jpg';
    
}

ligar.addEventListener('click',ligando);
desligar.addEventListener('click',desligando);
lampada.addEventListener('mouseover',ligando);
lampada.addEventListener('mouseleave',desligando)
lampada.addEventListener('dblclick',quebrar);