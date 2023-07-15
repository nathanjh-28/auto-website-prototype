
const data = {
    "h1": "This is a header from json"
}

function updateH1() {
    document.getElementById('h1').innerText = data['h1'];
}
updateH1()

const headerInput = document.getElementById('header-input')
const headerEl = document.getElementById('h1')

headerInput.addEventListener("change", e => {
    data['h1'] = e.target.value
    updateH1()

})