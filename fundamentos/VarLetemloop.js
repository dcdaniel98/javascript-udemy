// VAR EM UM LOOP FOR:
/* for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('i vale =', i) */

// LET EM UM LOOP FOR:
/* for (let i = 0; i < 10; i++){
    console.log(i)
} */

// console.log('i vale =', i) -> Gera um erro pois i está em um escopo de bloco.

const fun = []

/* for (var i = 0; i < 10; i++) {
    fun.push(function (){
        console.log(i)
    })
}

fun[2]()
fun[8]() */

for (let i = 0; i < 10; i++) {
    fun.push(function (){
        console.log(i)
    })
}

fun[2]()
fun[8]()
