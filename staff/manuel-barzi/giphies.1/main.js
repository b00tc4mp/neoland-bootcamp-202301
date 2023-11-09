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

    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=iwgURo0YVDL8RaYDYQnZ2wRieledYQvO&q=' + query + '&limit=10&offset=0&rating=g&lang=en')
    xhr.send()
}

searchGiphyAndRenderResults('dog')