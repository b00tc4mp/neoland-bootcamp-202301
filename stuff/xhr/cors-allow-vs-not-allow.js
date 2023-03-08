// go to https://google.com
// open inspector and run, and see the network tab and response headers (you will find 'Access-Control-Request: *', which means that this server (giphy) allows you to access the image via xhr from any origin (domain, ex: google.com))

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
xhr.open('GET', 'https://i.giphy.com/media/WXB88TeARFVvi/giphy.webp')
xhr.responseType = 'blob'
xhr.send()

// now try this, and you will see in the network tab that the navigator (client) blocks this response because it doesn't have the 'Access-Control-Allow-Origin: *' header

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
xhr.open('GET', 'https://http.cat/100')
xhr.responseType = 'blob'
xhr.send()