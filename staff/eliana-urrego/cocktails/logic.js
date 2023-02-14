function searchCocktails(query, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = function(event) {
        const result = JSON.parse(event.target.response)    
        
        //options
        //callback(result.drinks === null? [] : result.drinks)
        //callback(!result.drinks? [] : result.drinks)
        callback(result.drinks || []) //this is like the OR
    }

    xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query)
    xhr.send()
}

function retrieveCocktail(cocktailId, callback) {
    const xhr = new XMLHttpRequest
    xhr.onload = function(event) {
        const result = JSON.parse(event.target.response)    
        
        callback(result.drinks[0])
    }

    xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId)
    xhr.send()
}