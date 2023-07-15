
const data = {
    "h1": ["", "This is the main header"]
}

function renderWebPage() {
    update_h1_Placeholder()
    updateH1()
}

renderWebPage()

function update_h1_Placeholder() {
    document.getElementById('header-input').setAttribute('placeholder', data['h1'][1])
}

function updateH1() {
    if (data['h1'][0]) document.getElementById('h1').innerText = data['h1'][0]
    else {
        document.getElementById('h1').innerText = data['h1'][1];
        update_h1_Placeholder()
    }
}

const headerInput = document.getElementById('header-input')
const headerEl = document.getElementById('h1')

headerInput.addEventListener("change", e => {
    data['h1'][0] = e.target.value
    updateH1()

})

document.getElementById('hide-btn').addEventListener('click', () => {
    let formEl = document.getElementById('form');
    if (formEl.style.display === 'none') formEl.style.display = 'inline-block';
    else {
        formEl.style.display = 'none';
    }
})