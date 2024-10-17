// Função sem retorno:
function imprimirSoma (a , b) {
    console.log(`A soma de ${a} + ${b} é ${a+b}`)
}

imprimirSoma(3, 5)
imprimirSoma(3)
imprimirSoma(3, 5, 6, 7, 8, 9)
imprimirSoma()

// Função com retorno:
function soma(a, b = 1) {
    return `A soma de ${a} + ${b} é ${a+b}`
}

console.log(soma(3, 5))
console.log(soma(3))
console.log(soma())