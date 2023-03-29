// DEMO
// $ node notes add "hola mundo"
// note created (note-131313412343.txt)

// DEMO
// $ node notes get note-1676382448483
// hola mundo

const [, , operation] = process.argv

const fs = require('fs')

if (operation === 'add') {
    const content = process.argv[3]
    
    const { writeFile } = fs

    const file = 'note-' + Date.now() + '.txt'

    writeFile(file, content, 'utf8', error => {
        if (error) {
            console.error('could not write note, because of error: ' + error.message)

            return
        }

        console.log('note created (' + file + ')')
    })
} else if (operation === 'get') {
    const noteId = process.argv[3]

    const { readFile } = fs

    const file = noteId + '.txt'

    readFile(file, 'utf8', (error, content) => {
        if (error) {
            console.error('could not read note, because of error: ' + error.message)

            return
        }

        console.log(content)
    })
}
