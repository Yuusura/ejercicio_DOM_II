import pokemons from "./pokemons.js"

console.log(pokemons);


//4. Pintar en pantalla

const fuego = document.getElementById("fuego")
const agua = document.getElementById("agua")
const planta = document.getElementById("planta")
const electrico = document.getElementById("electrico")
const normal = document.getElementById("normal")

// forEach -> bucle para recorrer Arrays
// 1 bucle + 5 condiciones
pokemons.forEach(pokemon => {
    console.log(pokemon)

    // Pintar el LI en el DOM
    const card = `
            <li class="card">
            <header class="cardHeader">
                <h3>Nombre: ${pokemon.nombre}</h3>
                <p>HP: ${pokemon.hp}</p>
                <p>Ataque: ${pokemon.ataque}</p>
            </header>
            <div class="image">
                <img src="${pokemon.imagen_front}" alt="${pokemon.nombre}">
            </div>
            <p>Tipo: ${pokemon.tipo}</p>
            </li>
            `

        if (pokemon.tipo === "Fuego")
            fuego.innerHTML += card // Concatena al DOM
        else if (pokemon.tipo === "Agua")
            agua.innerHTML += card
        else if (pokemon.tipo === "Planta")
            planta.innerHTML += card
        else if (pokemon.tipo === "Eléctrico")
            electrico.innerHTML += card
        else if (pokemon.tipo === "Normal")
            normal.innerHTML += card
})

// Datos filtrados por tipo
// type: "Fuego", "Agua", etc...
// return array_filtrado de pokemons de un tipo
function getPokemonsByType(type) {
    let filtrados = []
    for (let i = 0; i < pokemons.length; i++) {
        if(pokemons[i].tipo === type) {
            filtrados.push(pokemons[i])
        }
    }
    return filtrados
}

// Pintar pokemons en pantalla
// renderPokemons
// parámetro: Lista de pokemons

function renderPokemons(lista) { // Función con código reutilizable (de arriba)
    lista.forEach(pokemon => {
    console.log(pokemon)

    // Pintar el LI en el DOM
    const card = `
            <li class="card">
            <header class="cardHeader">
                <h3>Nombre: ${pokemon.nombre}</h3>
                <p>HP: ${pokemon.hp}</p>
                <p>Ataque: ${pokemon.ataque}</p>
            </header>
            <div class="image">
                <img src="${pokemon.imagen_front}" alt="${pokemon.nombre}">
            </div>
            <p>Tipo: ${pokemon.tipo}</p>
            </li>
            `

        if (pokemon.tipo === "Fuego")
            fuego.innerHTML += card // Concatena al DOM
        else if (pokemon.tipo === "Agua")
            agua.innerHTML += card
        else if (pokemon.tipo === "Planta")
            planta.innerHTML += card
        else if (pokemon.tipo === "Eléctrico")
            electrico.innerHTML += card
        else if (pokemon.tipo === "Normal")
            normal.innerHTML += card
})
}

renderPokemons(getPokemonsByType("Agua")) // Una función llama a otra función
renderPokemons(getPokemonsByType("Eléctrico"))
renderPokemons(getPokemonsByType("Fuego"))
renderPokemons(getPokemonsByType("Normal"))
renderPokemons(getPokemonsByType("Planta"))

