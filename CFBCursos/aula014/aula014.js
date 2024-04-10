let colocacao = 4

switch(colocacao) {
    case 1:
        console.log("Primeiro Lugar")
        break
    case 2:
        console.log("Segundo Lugar")
        break
    case 3:
        console.log("Terceiro Lugar")
        break
    case 4: case 5: case 6:
        console.log("Prêmio de participação")
        break
    default:
        console.log("Não subiu ao pódio")
        break
}
// alternativa para o switch: 
if (colocacao === 1) {
    console.log("Primeiro Lugar")
} else if (colocacao === 2) {
    console.log("Segundo Lugar")
} else if (colocacao === 3) {
    console.log("Terceiro Lugar")
} else if (colocacao === 4 || colocacao === 5 || colocacao === 6) {
    console.log("Prêmio de participação")
} else {
    console.log("Não subiu ao pódio")
}