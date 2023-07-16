
const data = {
    "h1": ["", "Welcome to this landing page"],
    "subtitle": ["", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum fugiat dolore, porro amet culpa exercitationem ab quibusdam magnam consequuntur."]
}

function renderWebPage() {
    update_h1_Placeholder()
    updateSubtitle()
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

function updateSubtitle() {
    if (data['subtitle'][0]) document.getElementById('subtitle').innerText = data['subtitle'][0]
    else {
        document.getElementById('subtitle').innerText = data['subtitle'][1];
        //update_h1_Placeholder()
    }
}


const headerInput = document.getElementById('header-input')
const headerEl = document.getElementById('h1')

headerInput.addEventListener("change", e => {
    data['h1'][0] = e.target.value
    updateH1()
})

document.getElementById('subtitle-input').addEventListener("change", e => {
    data['subtitle'][0] = e.target.value;
    updateSubtitle()
})

document.getElementById('hide-btn').addEventListener('click', () => {
    let formEl = document.getElementById('form');
    if (formEl.style.display === 'none') formEl.style.display = 'inline-block';
    else {
        formEl.style.display = 'none';
    }
})