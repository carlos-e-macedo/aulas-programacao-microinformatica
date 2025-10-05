let h3 = document.querySelector('h3')

h3.addEventListener('click', function () {
  const div = document.querySelector('div')
  div.classList.toggle('hide')
})