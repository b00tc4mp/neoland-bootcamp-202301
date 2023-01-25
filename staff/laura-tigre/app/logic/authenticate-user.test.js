// case 0

authenticateUser('pepito@grillo.com', '123123123')

//case 1

try {
    authenticateUser('pepito@grillo', '_123123123')

} catch(error) {
    // console.error(error.message)
    verify(error.message === 'wrong credential')
}
//case 2
try {
    authenticateUser('pepit@grill.com', '123123123')
} catch (error) {
    //console.error(error.message)
    verify(error.message === 'wrong credential')
}