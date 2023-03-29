function prepareSalutation(from) {
    const salutation = 'Hello'
    
    return function(to) {
        console.log(from + ': ' + salutation + ', ' + to + '!')
    }
}

var juanSalute = prepareSalutation('Juan')
var lauSalute = prepareSalutation('Lau')

juanSalute('Flor')
lauSalute('Flor')
juanSalute('Xavi')
lauSalute('Xavi')

// VM1392:5 Juan: Hello, Flor!
// VM1392:5 Lau: Hello, Flor!
// VM1392:5 Juan: Hello, Xavi!
// VM1392:5 Lau: Hello, Xavi!