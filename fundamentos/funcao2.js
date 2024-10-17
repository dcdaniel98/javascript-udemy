// Armazenando uma função em uma variável:
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(3, 5)

// Armazenando uma função arrow em uma variável:
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 5))

// Retorno explícito:
const subtracao = (a, b) => a - b

console.log(subtracao(3, 5))

// Funçao com parâmetro único:

const nome = n => console.log(n)
nome('Daniel Nunes')