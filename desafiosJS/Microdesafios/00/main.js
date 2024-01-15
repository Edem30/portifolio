
const calcular = document.getElementById('Calcular');
const res = document.getElementById('res');

function imc() {const nome = document.getElementById('nome').value;
let altura = document.getElementById('altura').value;
let peso = document.getElementById('peso').value;
   if(nome!==''&& altura!== '' && peso!==''){
    let valorimc=(peso/altura**2).toFixed(1);
let classificacao=''
if(valorimc<18.5){classificacao=('Voce esta abaixo do peso');
   }else if(valorimc< 25){classificacao=('Voce esta com o peso ideal.');

   }else if(valorimc< 30){classificacao=('Voce esta com obesidade grau I');

   }else if(valorimc<35 ){classificacao=('Voce esta com obesidade grauII');

   }else if(valorimc< 40){classificacao=('Voce esta III');

   }else {classificacao=('Voce esta abaixo do pesoIIII');

   }

    res.textContent=`${nome} voce esta com imc ${valorimc}  ${classificacao}`;
        
        }
        else
    {
     res. textContent('Preencha todos os campos ')
    }
}   


calcular. addEventListener('click', imc);
