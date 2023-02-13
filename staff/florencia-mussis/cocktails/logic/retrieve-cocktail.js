function retrieveCocktail (cocktailId, callback){
    const xhr = new XMLHttpRequest

    xhr.onload = function (event) {
        const result = JSON.parse(event.target.response)

        callback(result.drinks[0])

    }
    

    xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailId)
    xhr.send()
}