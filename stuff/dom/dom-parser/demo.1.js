var html = "<html><body><h1>RGB</h1><ul><li>red</li><li>green</li><li>blue</li></ul></body></html>"

var domParser = new DOMParser()

var doc = domParser.parseFromString(html, 'text/html')

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