let input = document.querySelector('input')
let btn = document.querySelector('button')
let lista = document.querySelector('ol')

btn.addEventListener('click', function() {
  const novaTarefa = input.value
  const newItem = document.createElement('li')
  newItem.textContent = novaTarefa

  lista.appendChild(newItem)
})
