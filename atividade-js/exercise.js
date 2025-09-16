const promptLib = require("prompt-sync")();

// ---------- Exercicio 1 ----------

// let nome = 'Carlos'
// let idade = 19
// let jaAlmocou = true

// // ---------- Exercicio 2 ----------

// let numero1 = 50
// let numero2 = 5

// console.log(numero1 + numero2) // Soma
// console.log(numero1 - numero2) // Subtração
// console.log(numero1 * numero2) // Multiplicação
// console.log(numero1 / numero2) // Divisão

// // ---------- Exercicio 3 ----------

// let cidade = 'Barueri'
// let estado = 'Imperial'

// console.log("Eu moro em " + cidade + ", " + estado) // Concatenação
// console.log(`Eu moro em ${cidade}, ${estado}`) // Interpolação

// // ---------- Exercicio 4 ----------


// let idadeEx4 = promptLib("Qual a sua idade? ")

// if(idade >= 18) {
//   console.log("Você pode tirar a CNH!")
// } else {
//   let idadeRestante = 18 - idade
//   alert(`Faltam ${idadeRestante} para você tirar a CNH.`)
// }

// // ---------- Exercicio 5 ----------

// const numero = promptLib("Digite um número")

// for (let index = 0; index <= 10; index++) {
//   console.log(`${numero} x ${index} = `, numero * index )
// }

// // ---------- Exercicio 6 ----------


// let numeroInt = 25
// let numeroStr = '25'

// console.log(numeroInt == numeroStr) // Compara apenas o valor da variável
// console.log(numeroInt === numeroStr) // Compara o valor e tipo de dado da variável

// // ---------- Exercicio 7 ----------

// let diaDaSemana = Number(promptLib("Número do dia da semana? "))

// switch (diaDaSemana) {
//   case 1:
//     console.log("Domingo")
//     break
//   case 2:
//     console.log("Segunda")
//     break
//   case 3:
//     console.log("Terça")
//     break
//   case 4:
//     console.log("Quarta")
//     break
//   case 5:
//     console.log("Quinta")
//     break
//   case 6:
//     console.log("Sexta")
//     break
//   case 7:
//     console.log("Sábado")
//     break
//   default:
//     console.log("Escolha um número entre 1 e 7")
// }

// ---------- Exercicio 8 ----------

let numeroWhile = 0

while (numeroWhile <= 10) {
  if (numeroWhile === 5) {
    break
  }

  console.log(`Número: ${numeroWhile}`)
  numeroWhile++  
}

// ---------- Exercicio 9 ----------

for (let index = 1; index <= 20; index++) {

  // O número é ímpar?
  let temResto = !!(index % 2) // Se a divisão tem resto o número é ímpar

  if (temResto) {
    continue
  } else {
    console.log(`Encontrei um número par: ${index}`)
  } 
}


// ---------- Exercicio 10 ----------

let numeroDigitado1 = promptLib("Digite o primero número? ")
let numeroDigitado2 = promptLib("Digite o segundo número? ")
let operacao = promptLib("Digite a operação")


let resultado;

if (operacao === '+') {
  resultado = numeroDigitado1 + numeroDigitado2
} else if (operacao === '-') {
  resultado = numeroDigitado1 - numeroDigitado2
} else if (operacao === '*') {
  resultado = numeroDigitado1 * numeroDigitado2
} else {
  resultado = numeroDigitado1 / numeroDigitado2
}

console.log(resultado)
