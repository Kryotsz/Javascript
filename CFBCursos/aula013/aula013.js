// let num = 52

// dá pra escrever desse jeito, em apenas um linha
// if (num > 10) console.log("Numeral maior que 10")

// if (num > 10) {
//     if (num > 50) {
//         console.log("Numeral maior que 50")
//     } else {
//         console.log("Numeral maior que 10")
//     }
// } else if (num > 5) {
//     console.log("Numeral está entre 6 e 10")
// } else {
//     console.log("Numeral menor ou igual a 5")
// }

//--------------------------------------------------

let cooldown = false
let mana = 100

if (mana >= 50 && cooldown === false) {
    console.log("Pode usar a habilidade")
} else {
    console.log("Não pode usar a habilidade")
}

console.log("Fim do programa")