function searchPokemon(query, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = function (event) {
        const result = JSON.parse(event.target.response)

        callback(result.abilities)
    }

    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+query)
    xhr.send()
    
}