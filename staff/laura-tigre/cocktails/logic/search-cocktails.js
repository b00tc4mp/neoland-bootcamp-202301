function searchCocktails(query, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = function (event) {
        const result = JSON.parse(event.target.response)

        callback(result.drinks || [])
    }

    xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ query)
    xhr.send()
    
}