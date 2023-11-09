// business (logic) layer

function searchGiphy(query, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = function(event) {
        const result = JSON.parse(event.target.response)    
        
        callback(result.data)
    }

    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=iwgURo0YVDL8RaYDYQnZ2wRieledYQvO&q=' + query + '&limit=10&offset=0&rating=g&lang=en')
    xhr.send()
}

// presentation layer

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

const ul = document.createElement('ul')
document.body.appendChild(ul)

form.onsubmit = function(event) {
    event.preventDefault()

    const query = event.target.query.value

    const renderResults = items => {
        ul.innerHTML = ''

        items.forEach(item => {
            const url = item.images.original.url
    
            const img = document.createElement('img')
            img.src = url
    
            const li = document.createElement('li')
            li.appendChild(img)

            ul.appendChild(li)
        })
    }

    searchGiphy(query, renderResults)
}