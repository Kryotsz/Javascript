"use strict"

function teste() {
    // o let só permite que a variável seja acessível dentro do mesmo escopo ou escopos "filhos"
    // dar preferência a usar let
    let nome = "Igor"
    if (true) {
        // o var permite que a variável seja criada dentro do IF e mesmo assim, seja acessível fora desse escopo (escopo "pai")
        // var nome = "Igor"
        console.log("Dentro do if do teste: " + nome)
    }
    console.log("Dentro do teste: " + nome)
}

teste()

// irá dar erro, pois estamos chamando a variável fora do escopo
// console.log("Fora do teste: " + nome)
//------------------------------------------------------
let nome2 = "Bruno"
nome2 = "Igor"
// converte tipos de forma automática (casting)
nome2 = 10

console.log(nome2)
//-------------------------------------------------------
const curso = "Javascript"

// irá dar erro, pois uma constante deve permanecer com seu valor inalterado até o fim
// curso = "HTML"

console.log(curso)