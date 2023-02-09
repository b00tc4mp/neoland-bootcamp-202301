document.body.innerHTML = ''

var form = document.createElement('form')
form.classList.add('bg-amber-50','flex', 'justify-center', 'm-2', 'p-2')

form.onsubmit = (event) => {
    event.preventDefault()
    
    var images = document.querySelectorAll('.giphy-image')
    for (var i = 0; i < images.length; i++) {
        images[i].remove()
    }

    var query = event.target.q.value

    searchGiphy(query, (result) => {
        var imagesContainer = document.createElement('div')
        imagesContainer.classList.add('flex', 'flex-wrap', 'justify-center')

        result.data.forEach((item) => {
            var url = item.images.original.url

            var img = document.createElement('img')
            img.src = url
            img.classList.add('.giphy-image', 'm-2', 'border', 'border-gray-500', 'max-h-40', 'rounded-md')

            imagesContainer.append(img)
        })
        document.body.append(imagesContainer)
    })
    form.reset()
}
var h1 = document.createElement('h1')
h1.innerText = 'Giphy App'
h1.classList.add('font-bold', 'text-4xl', 'text-center', 'm-6')
document.body.append(h1)

var formContainer = document.createElement('div')


var input = document.createElement('input')
input.type = "search"
input.name = "q"
input.placeholder = "buscar aquí"
input.classList.add('w-96', 'bg-white', 'm-2', 'p-2','border', 'rounded-md')

var button = document.createElement('button')
button.innerText = "Busca con Giphy"
button.classList.add('border', 'bg-gray-400', 'text-white', 'm-2', 'p-2', 'font-bold', 'rounded-md')

form.append(input, button)
document.body.append(form)