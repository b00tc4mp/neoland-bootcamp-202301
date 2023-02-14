function setTimeoutBlocking(callback, milis) {
    for (var initial = Date.now(); Date.now() - initial < milis;);

    callback()
}



console.log(0)

//setTimeout(() => console.log(1), 1000)

//for (var initial = Date.now(); Date.now() - initial < 1000;);
//console.log(1)

setTimeout(() => console.log(3), 1000)

setTimeoutBlocking(() => console.log(1), 3000)

console.log(2)
// VM3381:9 0
// VM3381:18 1
// VM3381:20 2
// undefined
// VM3381:16 3