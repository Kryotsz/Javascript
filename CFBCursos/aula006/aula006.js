let n1 = 1
let n2 = "1"

// o == compara os valores, nesse caso, ambos possuem valor 1, então ele considera igual
// o === compara os valores, os tipos e a posição na memória, nesse caso, o n1 é numérico, enquanto que n2 é string, então não são iguais
console.log(n1 + " == " + n2 + ": " + (n1==n2))
console.log(n1 + " === " + n2 + ": " + (n1===n2))
//-------------------------------------------------------
// para entrada de dados, precisa de interface gráfica, então só irá funcionar se rodar pelo browser
let nome = prompt("Digite seu nome")

console.log(nome)
//-----------------------------------------------------
// uma forma de verificar se está rodando em um celular é a seguinte:
if (navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
) {
    console.log("Celular")
} else {
    console.log("PC")
}
//-------------------------------------------------------------
// <script src="aula006.js" defer></script> esse "defer" faz com que o javascript seja carregado em paralelo com o HTML, 
// possibilitando, que você coloque o script no head do HTML ao invés de por no final do body