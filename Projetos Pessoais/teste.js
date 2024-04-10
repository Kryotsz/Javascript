const recursos = ["Mana", "Energia", "Furia", "Nenhum"]
let qtdeRecurso = [500, 200, 100, 0]
const habilidades = ["Q", "W", "E", "R"]
let custoHabilidade = [50, 100, 50, 100]
let cooldowns = [false, false, false, false]
let posRecurso = 0

const capitalizeString=(string)=>{
    console.log(string.charAt(0).toUpperCase() + string.slice(1))
    return string.charAt(0).toUpperCase() + string.slice(1)
}

let tipoRecurso = prompt("Qual recurso é necessário para o seu personagem utilizar uma habilidade? ")
tipoRecurso = capitalizeString(tipoRecurso.toLowerCase())

do {
    if (!(recursos.includes(tipoRecurso))) {
        tipoRecurso = capitalizeString(prompt("Digite um recurso válido: ").toLowerCase())
    } else {
        posRecurso = recursos.indexOf(tipoRecurso)
        recursos.forEach(e => {
            if (tipoRecurso.toUpperCase() === e.toUpperCase()) {
                let habilidade = prompt("Qual habilidade você quer utilizar? ").toUpperCase()
                while (!(habilidades.includes(habilidade))) {
                    habilidade = prompt("Digite uma habilidade válida: ").toUpperCase()
                }
                let posHabilidade = habilidades.indexOf(habilidade)
                if (!cooldowns[posHabilidade] && qtdeRecurso[posRecurso] >= custoHabilidade[posHabilidade]) {
                    console.log(`Você usou a habilidade ${habilidade}`)
                    cooldowns[posHabilidade] = true
                    qtdeRecurso[posRecurso] -= custoHabilidade[posHabilidade]
                    console.log(`${tipoRecurso} atual: ${qtdeRecurso[posRecurso]}`)
                } else {
                    console.log("------------------------------------")
                    console.log("Você não pode usar essa habilidade!")
                    console.log(`Cooldown: ${cooldowns[posHabilidade]}`)
                    console.log(`Custo: ${custoHabilidade[posHabilidade]}`)
                    console.log(`${tipoRecurso} atual: ${qtdeRecurso[posRecurso]}`)
                    console.log("------------------------------------")
                }
            }
        })
    }
} while (qtdeRecurso[posRecurso] > 0)

alert("Fim do programa")
