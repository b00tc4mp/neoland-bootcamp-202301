function searchGiphy(query,callback) {
    var xhr = new XMLHttpRequest

    xhr.onload = function(event) {
        var result = JSON.parse(event.target.response)
    
        callback(result)

        // result.data.forEach(item => {
        //     var url = item.images.original.url

        //     var img = document.createElement('img')
        //     img.src = url
        //     img.classList.add('.giphy-image')
        //     document.body.append(img)
        // })
    }

    // WARN replace YOUR_API_KEY with your api key from giphy

    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=hPHzEAc45NCnOCy7peY8zUG7PimQjpZs&q=' + query + '&limit=25&offset=0&rating=g&lang=en')
    xhr.send()
    // xhr.abort()
}