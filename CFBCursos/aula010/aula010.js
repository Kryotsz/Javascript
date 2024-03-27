let num1 = 10
let num2 = 5

// let res = num % 2

// forma normal do IF
// if (res === 0) {
//     console.log("Par")
// } else {
//     console.log("Ímpar")
// }

// operação ternária
res = ((num1 % 2) === 0 ? "Par" : "Ímpar")

// forma alternativa:
res = (!(num1%2) ? "Par" : "Ímpar")
// o resto da divisão de 10 por 2 é igual a 0, portanto, é como se o valor da condição fosse falso, sendo assim, cairia no Ímpar, porém, ao utilizar o operador de inversão, ele funciona perfeitamente

res = (num1 > num2 ? "Verdadeiro" : "Falso")

console.log(res)