// Exercício 1: Contador Simples

let contador = 0
const h2 = document.querySelector('#contador-h2')

h2.innerHTML = `Contador: ${contador}`

const btn_incre = document.querySelector('#contador-btn-incrementar')
const btn_reset = document.querySelector('#contador-btn-resetar')

btn_incre.addEventListener('click', function() {
  contador++
  h2.innerHTML = `Contador: ${contador}`
})

btn_reset.addEventListener('click', function() {
  contador = 0
  h2.innerHTML = `Contador: ${contador}`
})



