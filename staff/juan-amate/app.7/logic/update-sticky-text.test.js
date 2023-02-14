// case 0 -> Happy path

var stickyId = stickies[0].id // 'sticky-0
updateStickyText('pepito@grillo.com', stickyId, 'hello world')
//console.log(stickies[0])
verify(stickies[0].text === 'hello world')

// case 1 - User not found

var stickyId = stickies[0].id // 'sticky-0'
try {
    updateStickyText('pepito@grill.com', stickyId, 'hello world')
    console.log(stickies[0])
} catch (error) {
    // expected output: 'user with email wrong@user.com not found'
    verify(error.message === 'user with email pepito@grill.com not found')
}

// case 2 - Sticky not found

var stickyId = stickies[1].id // sticky-1
try {
    updateStickyText('pepito@grillo.com', stickyId, 'hola mundo')
    console.log(stickies[1])
} catch (error) {
    //console.log(error).message
    // expected output: 'sticky with id wrong-id not found'
    verify(error.message === 'sticky with id sticky-1 does not belong to user with email pepito@grillo.com')
}

// case 3 - Sticky does not belong to the user

var stickyId = 'sticky-100'
try {
    updateStickyText('pepito@grillo.com', stickyId, 'hola mundo')
    console.log(stickies[100])
} catch (error) {
    //console.log(error.message)
    // expected output: 'sticky with id sticky-1 does not belong to the user with the email pepito@grillo.com'
    verify(error.message === 'sticky with id sticky-100 not found')
}