// go to https://http.cat/
// open inspector and run:

document.body.innerHTML = ''

var xhr = new XMLHttpRequest()

// response
xhr.onload = function(event) {
    var reader = new FileReader()
    
    reader.onloadend = function(event) {
       //console.log(event.target.result)

        var img = document.createElement('img')
        img.src = event.target.result

        document.body.appendChild(img)
    }
    
    reader.readAsDataURL(event.target.response);
}

// request
xhr.open('GET', 'https://http.cat/102')
xhr.responseType = 'blob'
xhr.send()