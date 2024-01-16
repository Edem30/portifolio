const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== "" && altura !== "" && peso !== "") {
        const vimc = (peso / altura ** 2).toFixed(2);
        let classificacao = '';

        if (vimc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (vimc < 24.9) {
            classificacao = 'Peso normal';
        } else if (vimc < 29.9) {
            classificacao = 'Sobrepeso';
        } else if (vimc < 34.9) {
            classificacao = 'Obesidade Grau 1';
        } else if (vimc < 39.9) {
            classificacao = 'Obesidade Grau 2';
        } else {
            classificacao = 'Obesidade Grau 3';
        }

        resultado.textContent = `${nome}, seu IMC é de ${vimc} e você está ${classificacao}.`;

    } else {

        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);