
const data = {
    "h1": ["", "This is the main header"]
}

function updatePlaceholder() {
    document.getElementById('header-input').setAttribute('placeholder', data['h1'][1])
}
updatePlaceholder()

function updateH1() {
    if (data['h1'][0]) document.getElementById('h1').innerText = data['h1'][0]
    else {
        document.getElementById('h1').innerText = data['h1'][1];
        updatePlaceholder()
    }
}
updateH1()

const headerInput = document.getElementById('header-input')
const headerEl = document.getElementById('h1')

headerInput.addEventListener("change", e => {
    data['h1'][0] = e.target.value
    updateH1()

})