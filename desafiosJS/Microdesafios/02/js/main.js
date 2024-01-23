const  semaforo=document.getElementById('semaforo');
const  vermelho=document.getElementById('vermelho');
const  amarelo=document.getElementById('amarelo');
const  verde=document.getElementById('verde');
const  desligado=document.getElementById('desligado');

function vermelhoon (){
    
    semaforo.src="img/vermelho.png"
}
function amareloon (){
    
    semaforo.src="img/amarelo.png"
}
function verdeon (){
    
    semaforo.src="img/verde.png"
}

function desligar (){

    
   semaforo.src="img/desligado.png"}
function trocar (){
    
    alert("Luz ligada");
}







vermelho.addEventListener('click',vermelhoon);
amarelo.addEventListener('click',amareloon);
verde.addEventListener('click',verdeon);
desligado.addEventListener('click',desligar);
semaforo.addEventListener('click',trocar);
