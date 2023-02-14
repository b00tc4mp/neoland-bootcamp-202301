// DEMO
// $ node notes add "hola mundo"
// note created (note-131313131331.txt)

// DEMO
// $ node notes get note-1676382558484
// hola mundo

const [, , command, content] = process.argv

const fs = require('fs')

const noteId = content

if (command === 'add') {
    const { writeFile } = fs

    const file = 'note-' + Date.now() + '.txt'

    writeFile(file, content, 'utf8', error => {
        if (error) {
            console.error('could not wrrite note, because of error: ' + error.message)

            return
        }

        console.log('note created (' + file + ')')
    })
}else if (command === 'get') {
    const { readFile } = fs

    readFile(noteId, 'utf8', (error, content) => {
        if (error) {
            console.error('could not read file, because ' + error.message)
    
            return
        }
    
        console.log(content)
    })
}








