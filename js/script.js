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

// CON IL CICLO FOR

for (let i = 0; i < listaSpesa.length; i++) {
    const item = listaSpesa[i]
    // creiamo LI come stringhe
    const li = `
    <li class="list-item"> 
        ${item}
    </li>`

    // inseriamo li nel wrapper
    listaWrapper.innerHTML += li
    console.log(listaWrapper)
}
// ----------------