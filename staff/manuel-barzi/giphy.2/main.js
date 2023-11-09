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

const form = document.createElement('form')
form.className = 'border-2 flex justify-center gap-2 p-2'

const input = document.createElement('input')
input.className = 'border-2'
input.type = 'search'
input.name = 'query'

const button = document.createElement('button')
button.className = 'border-2'
button.innerText = 'Search'

form.append(input, button)
document.body.appendChild(form)

form.onsubmit = function(event) {
    event.preventDefault()

    const query = event.target.query.value

    searchGiphyAndRenderResults(query)
}