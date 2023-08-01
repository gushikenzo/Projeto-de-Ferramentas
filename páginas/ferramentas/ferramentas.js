const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const interv = frm.intervalo.value
const numeros = []

frm.addEventListener("submit", (e) => {
    const interv = frm.intervalo.value
    resp.innerText = 'Olá'
    e.preventDefault()
});


function media() {
    
}