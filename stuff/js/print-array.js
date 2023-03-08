staff = ['Lau', 'Flor', 'Xa', 'Ju', 'Eli', 'Ma']
var stuff = ['html', 'css', 'js']

function print(array) {
    // TODO iterate array and print each item in console
    
    for (var i = 0; i < array.length; i++) {
        var value = array[i]

        console.log(value)
    }
}

console.log('> print staff')
print(staff)

console.log('> print stuff')
print(stuff)
// VM6211:14 > print staff
// VM6211:10 Lau
// VM6211:10 Flor
// VM6211:10 Xa
// VM6211:10 Ju
// VM6211:10 Eli
// VM6211:10 Ma
// VM6211:17 > print stuff
// VM6211:10 html
// VM6211:10 css
// VM6211:10 js