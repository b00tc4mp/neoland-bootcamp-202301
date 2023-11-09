// case 0

var stickyId = stickies[0].id // 'sticky-0'
updateStickyText('pepito@grillo.com', stickyId, 'hello world')
//console.log(stickies[0])
console.assert(stickies[0].text === 'hello world', 'sticky 0 text must hello world')

// case 1

var stickyId = stickies[0].id // 'sticky-0'
try {
    updateStickyText('pepito@grill.com', stickyId, 'hello world')
    console.log(stickies[0])
} catch(error) {
    //console.error(error.message)
    console.assert(error.message === 'user with email pepito@grill.com not found', 'expect error because user does not exist')
}

// case 2

var stickyId = stickies[1].id // 'sticky-1'
try {
    updateStickyText('pepito@grillo.com', stickyId, 'hola mundo')
    console.log(stickies[1])
} catch(error) {
    // console.error(error.message)
    console.assert(error.message === 'sticky with id sticky-1 does not belong to user with email pepito@grillo.com', 'expect error because sticky does not belong to user')
}

// case 3

var stickyId = 'sticky-100'
try {
    updateStickyText('pepito@grillo.com', stickyId, 'hola mundo')
    console.log(stickies[100])
} catch(error) {
    // console.error(error.message)
    console.assert(error.message === 'sticky with id sticky-100 not found', 'expect error because there is no sticky with the provided sticky id')
}
