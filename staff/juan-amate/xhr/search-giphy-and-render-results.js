// go to https://developers.giphy.com/ and register and application to get your api key

function searchGiphyAndRenderResults(query) {
    var xhr = new XMLHttpRequest

    xhr.onload = function(event) {
        var result = JSON.parse(event.target.response)
    
        document.body.innerHTML = ''
        
        result.data.forEach(item => {
            var url = item.images.original.url
    
            var img = document.createElement('img')
            img.src = url
    
            document.body.append(img)
        })
    }
    
    // WARN replace YOUR_API_KEY with your api key from giphy

    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY''&q=' + query + '&limit=25&offset=0&rating=g&lang=en')
    xhr.send()
}

// MY API KEY: YCvbjTYeYgdgm4QJTKQvcMkkTljY42iI>
    
