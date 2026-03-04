// Variables
const nombreInput = document.getElementById("nombre");
const listaUl = document.getElementById("lista-input");
const botonAgregar = document.getElementById("btn-agregar");
const botonResolver = document.getElementById("btn-resolver")
const listaResponse = document.getElementById("lista-response") 
let listaAmigos = []

function render() {
  listaUl.innerHTML = "";
  listaAmigos.forEach((amigo) => {
    console.log(amigo)
    listaUl.innerHTML+=amigo+
    `
    <input type="button" class="btn-borrar" value="Borrar" data-id='${amigo}'>
    <br>`
  });
}

botonAgregar.addEventListener("click", (e) => {
  e.preventDefault(); 
  const nombre = nombreInput.value.trim();

  if (nombre !== "") {
    listaAmigos.push(nombre); 
    render();                 
    nombreInput.value = "";   
  }
});
botonResolver.addEventListener("click", (e) => {
    e.preventDefault()
    resolver()
})

listaUl.addEventListener("click", (e) => {
    e.preventDefault()
    let nombre = e.target.dataset.id
    borraAmigo(nombre)
})

function borraAmigo(nombre) {
    let indice = listaAmigos.indexOf(nombre)
    listaAmigos.splice(indice, 1)
    render()
}
function resolver() {
    if (listaAmigos.length < 2) {
        console.log("A Necesitas al menos 2 para el Amigo Invisible")
        return
    }
    let mapParejas = new Map()
    let receptores = [...listaAmigos]

    for (let i = 0; i< listaAmigos.length; i++) {
        let dador = listaAmigos[i]
        let opciones = receptores.filter(nombre => nombre !== dador)

        if (opciones.length === 0) return resolver()
        let sorteo = Math.floor(Math.random() * opciones.length)

        let receptor = opciones[sorteo]

        mapParejas.set(dador, receptor)

        let indexABorrar = receptores.indexOf(receptor)
        receptores.splice(indexABorrar, 1)
    }
    mapParejas.forEach((receptor, dador) => {
        let li = document.createElement('li')
        li.textContent = `${dador} le regala a: ${receptor}`
        listaResponse.appendChild(li)
    })

}
