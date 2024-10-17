// ESCOPO GLOBAL:

var numero = 1

{
    {
        var numero = 2
        console.log('Dentro =', numero)
}
    }
        
console.log('Fora =', numero)

// ESCOPO LOCAL:

function num() {
    var n = 123
    console.log(n)
}

num()

// console.log(n) -> Gera um erro pois n está com um escopo local.