var a = [10, 20, 30, 40, 50, 60, 70]

var b = []

for (var i = 0; i < a.length / 2; i++) {
    var currentElement = a[i]
    var changeElement = a[a.length - 1 - i]

    b[i] = changeElement
    b[a.length - 1 - i] = currentElement
}