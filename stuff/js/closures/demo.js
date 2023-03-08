function prepareSalutator(who) {
    return {
        hello: function(to) {
            console.log(who + ': hello ' + to)
        },

        bye: function(to) {
            console.log(who + ': bye ' + to)
        }
    }
}

var juan = prepareSalutator('Juan')
var xavi = prepareSalutator('Xavi')

juan.hello('Flor')
juan.bye('Lau')
juan.bye('Xavi')

xavi.bye('Juan')
xavi.hello('Flor')

// VM4713:4 Juan: hello Flor
// VM4713:8 Juan: bye Lau
// VM4713:8 Juan: bye Xavi
// VM4713:8 Xavi: bye Juan
// VM4713:4 Xavi: hello Flor