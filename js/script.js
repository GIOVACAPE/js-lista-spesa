// CONSOLELOG PROVA
console.log('lista della spesa')

// creare array lista della spesa
// stampare nella pagina usando ciclo for

const listaSpesa = [
    'panettone Bauli',
    'crema al mascarpone',
    'caffè',
    'zucchero',
    'sugo di noci',
    'pansoti'
]

// estrapolo dal dom il mio wrapper
const listaWrapper = document.querySelector('.list-wrapper')
listaWrapper.innerHTML = ''


// CICLO WHILE

let i = 0

while (i < listaSpesa.length) {
    const item = listaSpesa[i]
    const li = `
    <li class="list-item"> 
        ${item}
    </li>`
    listaWrapper.innerHTML += li
    i++

    console.log(listaWrapper)
}