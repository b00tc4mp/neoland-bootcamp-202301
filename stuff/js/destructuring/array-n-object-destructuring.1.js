var a = [10, 20, 30]

//var v0 = a[0]
//var v1 = a[1]
//var v2 = a[2]
//var [v0, v1, v2] = a
var { 0: v0, 1: v1, 2: v2 } = a

console.log(v0, v1, v2)
// VM31654:9 10 20 30