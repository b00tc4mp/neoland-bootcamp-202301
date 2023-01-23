// case 0

createSticky('peter@pan.com', 'hello wendy', 'public')
console.log(stickies)
// case 1
createSticky('wendy@darling.com', 'hello peter ,)', 'public')
console.log(stickies)
// case 2
try {
    createSticky('ltc@carrasco.com', 'ok', 'public')
} catch (error) {
    //console.error(error.message)

}