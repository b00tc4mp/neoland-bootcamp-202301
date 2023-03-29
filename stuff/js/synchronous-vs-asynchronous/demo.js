function setTimeoutBlocking(callback, millis) {
    for (var initial = Date.now(); Date.now() - initial < millis;);

    callback()
}

console.log('hey')

setTimeout(() => console.log('do this asap 1'), 3000)
setTimeoutBlocking(() => console.log('do this asap 2'), 5000)

console.log('do it now! 1')
console.log('do it now! 2')
console.log('do it now! 3')
console.log('do it now! 4')
// VM3018:7 hey
// VM3018:10 do this asap 2
// VM3018:12 do it now! 1
// VM3018:13 do it now! 2
// VM3018:14 do it now! 3
// VM3018:15 do it now! 4
// undefined
// VM3018:9 do this asap 1