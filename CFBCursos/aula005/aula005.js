let num1 = 10
let num2 = 5
let num3 = 10

let operacao1 = num1 > num2
let operacao2 = num1 < num2
let operacao3 = num1 >= num3
let operacao4 = num1 != num3
let operacao5 = !(num1 != num3)

console.log(num1 + " é maior que " + num2 + ": " + operacao1)
console.log(num1 + " é menor que " + num2 + ": " + operacao2)
console.log(num1 + " é maior ou igual a " + num3 + ": " + operacao3)
console.log(num1 + " é diferente de " + num3 + ": " + operacao4)
console.log(num1 + " não é diferente de " + num3 + ": " + operacao5)