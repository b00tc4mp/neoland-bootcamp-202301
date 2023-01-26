// case 0

var stickyId = stickies[0].id // 'sticky-0'
updateStickyText('pepito@grillo.com', stickyId, 'hello world')
console.log(stickies[0])

// case 1

var stickyId = stickies[0].id // 'sticky-0'
try {
    updateStickyText('pepito@grill.com', stickyId, 'hello world')
    console.log(stickies[0])
} catch(error) {
    console.error(error.message)
}

// case 2

var stickyId = stickies[1].id // 'sticky-0'
try {
    updateStickyText('pepito@grillo.com', stickyId, 'hola mundo')
    console.log(stickies[1])
} catch(error) {
    console.error(error.message)
}

// case 3

var stickyId = 'sticky-100'
try {
    updateStickyText('pepito@grillo.com', stickyId, 'hola mundo')
    console.log(stickies[100])
} catch(error) {
    console.error(error.message)
}
