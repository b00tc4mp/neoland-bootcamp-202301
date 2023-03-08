var count = 0
var setCount = newCount => count = newCount

var state = [count, setCount] // useState(0)

console.log(count) // render

setCount(count + 1)

console.log(count) // render

setCount(count + 1)

console.log(count) // render

// ...