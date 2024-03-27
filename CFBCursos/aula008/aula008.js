// let n1 = 20
// let n2 = 14

// let res = n1 & n2
// 20 em binário é 10100
// 14 em binário é 01110
// somente onde ambos tem 1 na mesma posição, retorna 1, se não, retorna 0
// ou seja, retornaria esse número em binário: 00100, que é equivalente ao 4

//---------------------------------------------------------------------------
// let n1 = 10
// let n2 = 11

// let res = n1 | n2
// 10 em binário é 1010
// 11 em binário é 1011
// onde tiver 1, retorna 1, se não, retorna 0
// ou seja, retorna esse número em binário: 1011, que é equivalente ao 11

//---------------------------------------------------------------------------
// let n1 = 25
// let n2 = 62

// let res = n1 ^ n2
// 25 em binário é 011001
// 62 em binário é 111110
// onde tiver 1 e no outro 0, retorna 1, se não, retorna 0
// ou seja, retorna esse número em binário: 100111, que é equivalente ao 39

//---------------------------------------------------------------------------
// esses operadores tem a ver com AND e OR, consultando a tabela da verdade, fica mais visível o que está acontecendo
// eles verificam bit por bit
// o AND verifica se ambos forem 1, retorna 1
// o OR verifica se apenas 1 deles for 1, já retorna 1

//---------------------------------------------------------------------------
let n1 = 10

// desloca 1 bit para esquerda, isso faz com que preencha com 0 na direita
// isso resulta no número dobrado (x2)
// let res = n1 << 1

// desloca 1 bit para direita, isso faz com que preencha com 0 na esquerda
// isso resulta na metade do número (/0.5)
let res = n1 >> 1

console.log(res)