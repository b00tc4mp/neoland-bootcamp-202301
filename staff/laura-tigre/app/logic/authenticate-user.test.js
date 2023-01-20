// case 0

authenticateUser('pepito@grillo', '123123123')

//case 1

try {
    authenticateUser('pepito@grillo', '_123123123')

} catch {
    // console.error(error.message)
}
//case 2
try {
    authenticateUser('pepit@grill.com', '123123123')
} catch {
    //console.error(error.message)
}