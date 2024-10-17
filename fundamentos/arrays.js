const valores = [8 , 10 , 6.5, 4]

console.log(valores)

console.log(valores[2])
console.log(valores[4])
valores[4] = 5
console.log(valores[4])

valores.push('Daniel', false, null)

console.log(valores)
valores.pop()
console.log(valores)
delete valores[6]
console.log(valores)

console.log(typeof valores)