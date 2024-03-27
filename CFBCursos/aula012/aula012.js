// let n1 = [10, 20, 30]
// let n2 = [11, 22, 33, 44, 55]
// let n3 = [m1, n2]
// let n4 = [...n1, ...n2]

// console.log("n1: " + n1)
// console.log("n2: " + n2)
// console.log("n3: " + n3)
// console.log("n4: " + n4)

//-----------------------------------------------------------------------

// const jogador1 = {nome: "Igor", vidas: 3, energia: 100, mana: 200}
// const jogador2 = {nome: "Bruce", vidas: 5, energia: 100, velocidade: 80}
// const jogador3 = {...jogador1, ...jogador2}

// console.log(jogador3)

//-----------------------------------------------------------------------

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 5, 4, 10] // caso tenha mais valores do que parâmetros, o spread irá pegar só os 3 primeiros

// console.log(soma(valores)) se passar valores dessa forma, ele tenta jogar tudo pro v1
console.log(soma(...valores)) // desse jeito, ele espalha os 3 primeiros valores entre v1, v2 e v3

// obtém a coleção de todas as divs que existem no html
// retorna um HTML Collection (só pode receber elementos HTML)
const objs1 = document.getElementsByTagName("div")
// retorna um array (pode adicionar outros tipos de elementos)
const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(e => {
    e.innerHTML = "Curso"
})

console.log(objs1)
console.log(objs2)