// imprime cada 1 seg sin parar

setInterval(function() {
    console.log('hola mundo')
}, 1000)


// imprime una vez cada 5 seg

setTimeout(function() {
    console.log('hola mundo')
}, 5000)
// 2535
// VM5668:2 hola mundo
setTimeout(function() {
    console.log('hola mundo')
}, 5000)
// 2550
// VM5687:2 hola mundo
setTimeout(function() {
    console.log('hola mundo')
}, 5000)
// 2565
// VM5736:2 hola mundo
setTimeout(function() {
    console.log('hola mundo')
}, 5000)
// 2579


/////////////////////////////////////////////////////////////////////////////////////////////////////

function setTimeoutBlocking(callback, millis) {
    for (var initial = Date.now(); Date.now() - initial < millis;); // si date now es menor que los milis el bucle se queda dando vueltas, cuando date now es mayor sale del bucle. Aqui el fin es bloquear el proceso.

    callback()
}

console.log(0)

setTimeout(() => console.log(3), 1000) // En cola

setTimeoutBlocking(() => console.log(1), 3000) //bloquea y se imprime

console.log(2)

// VM3381:9 0
// VM3381:18 1
// VM3381:20 2
// undefined
// VM3381:16 3
/////////////////////////////////////////////////////////////////////////////////////////////////////

var html = "<html><body><h1>RGB</h1><ul><li>red</li><li>green</li><li>blue</li></ul></body></html>"

var domParser = new DOMParser()

var doc = domParser.parseFromString(html, 'text/html') //convierte un string en html

console.log(doc.querySelector('h1'))

var lis = doc.querySelector('ul').children

for (var i = 0; i < lis.length; i++) {
    var li = lis[i]

    console.log(li.innerText)
}
// VM4836:7 <h1>​RGB​</h1>​
// VM4836:14 red
// VM4836:14 green
// VM4836:14 blue