document.body.innerHTML = ''

var form = document.createElement('form')
form.classList.add('form-class', 'flex','flex-col', 'items-center','justify-center','mt-20')


form.onsubmit = (event) => {

    event.preventDefault()

    var images = document.querySelectorAll('.giphy-image')
    

    for (var i = 0; i < images.length; i++) {
        images[i].remove()
    }


    var query = event.target.q.value

    searchGiphy(query, (result) => {
        var imagesContainer= document.createElement('div')

        imagesContainer.classList.add('grid','grid-cols-3','md:grid-cols-5','grid-rows-8','md:grid-rows-5' , 'p-4','gap-8','position-fixed')

        result.data.forEach((item) => {
            var url = item.images.original.url

            var img = document.createElement('img')
            img.src = url
            img.classList.add('giphy-image','rounded','shadow-lg','w-[250px]','h-[250px]')

            imagesContainer.append(img)
        })
        document.body.append(imagesContainer)
    })
    form.reset()


}

var input = document.createElement('input')
input.classList.add('border-double','border-2','rounded-full', 'border-orange-500','w-[20ch]','m-4', 'text-center','p-3','hover:bg-orange-100','focus:outline-none')

input.type = "search"
input.name = "q"
input.placeholder = "buscar aquí"

var button = document.createElement('button')
button.innerText = " Busca con Giphy"
button.classList.add('button','border-2','border-orange-500' , 'bg-orange-200', 'p-2','rounded-lg', 'shadow-lg')

form.append(input, button)
document.body.append(form)


