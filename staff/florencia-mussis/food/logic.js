function searchFood(query, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = function (event) {
        const result = JSON.parse(event.target.response) //con json.parse convertimos el string en un objeto
    
        callback(result.meals)// los resultados de busqueda del search se envian a setItems
    }

    xhr.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + query)
    xhr.send ()
}

