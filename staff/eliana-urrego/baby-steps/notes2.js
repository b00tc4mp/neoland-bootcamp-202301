//DEMO
//$ node notes add "hola mundo"
// note created (note-1442.txt)

//DEMO 
//$ node notes get note-1442.txt
//hola mundo

const [, , operation] = process.argv
const fs = require('fs')

if (operation === 'add') {
    const { writeFile } = fs

    const file = 'note-' + Date.now() + '.txt'

    writeFile(file, content, 'utf8', error => {
        if (error) {
            console.error('could not write note, because of error: ' + error.message)
           
            return
        }
        console.log('note created (' + file + ')')

    })
} else if (operation === 'get'){
    const noteId = process.argv[3]
    const [readFile] = fs

    const file = noteId + '.txt'

    readFile(file,'utf8', (error, content) => {
        if(error) {
            console.error('could not read the file, because of error: ' + error.message)
               
            return
        }
        console.log(content)
    })
} 

        