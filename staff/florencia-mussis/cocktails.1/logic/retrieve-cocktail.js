function retrieveCocktail (id, callback){
    const xhr = new XMLHttpRequest

    xhr.onload = function (event) {
        const result = JSON.parse(event.target.response)

        const drink = result.drinks[0]

        const ingredients = []

        let hasToContinue = true

        for (let i = 1; i <= 15 && hasToContinue; i++) {
            const ingredient = drink[`strIngredient${i}`]
            // const ingredient = drink['strIngredient' + i]

            if(ingredient) {
                ingredients.push(ingredient)
            } else {
                hasToContinue = false
            }
        }

        drink.ingredients = ingredients 

        callback(drink)
    }

    xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
    xhr.send()

}
