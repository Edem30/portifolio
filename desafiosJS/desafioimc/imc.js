
const calcular = document.getElementById ('calcular')



function imc (){
const nome =  document.getElementById('nome').value
const altura = document.getElementById('altura').value
const peso = document.getElementById('peso').value
const resultado = document.getElementById('resultado')


if (nome && altura && peso !==""){
    const vimc =(peso/altura**2).toFixed(2)
    resultado.textContent = vimc
 
 
}
else{

    resultado.textContent = 'Preencha os tres campos!'
}
}





calcular.addEventListener('click',imc);