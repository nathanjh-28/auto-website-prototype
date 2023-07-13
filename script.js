
const headerInput = document.getElementById('header-input')
const headerEl = document.getElementById('h1')

headerInput.addEventListener("change", e => headerEl.innerText = e.target.value)