function searchGiphy(query, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = function (event) {
        const result = JSON.parse(event.target.response)

        callback(result.data)
    }

    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=hPHzEAc45NCnOCy7peY8zUG7PimQjpZs&q=' + query + '&limit=25&offset=0&rating=g&lang=en')
    xhr.send()
    
}