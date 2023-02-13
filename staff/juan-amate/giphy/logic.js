function searchGiphy(query, callback) {
    var xhr = new XMLHttpRequest

    xhr.onload = function (event) {
        var result = JSON.parse(event.target.response)

       callback(result.data)
    }
    
    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=YCvbjTYeYgdgm4QJTKQvcMkkTljY42iI&q=' + query + '&limit=25&offset=0&rating=g&lang=en')
    xhr.send()
}