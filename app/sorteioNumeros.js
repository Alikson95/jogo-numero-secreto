const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

const elementoDeMenorValor = document.querySelector('#menor-valor');
elementoDeMenorValor.innerHTML = menorValor;

const elementoDeMaiorValor = document.querySelector('#maior-valor');
elementoDeMaiorValor.innerHTML = maiorValor;