// DEMO
// $ node notes add "hola mundo"
// note created (note-131313412343.txt)

// DEMO
// $ node notes get note-1676382448483
// hola mundo

// DEMO replace content with new one
// $ node notes set note-1676382448483 'ciao mondo'
// note updated (note-1676382448483.txt)

// DEMO add more content to existing one (with line break)
// $ node notes add note-1676382448483 'ciao mondo'
// note updated (note-1676382448483.txt)

// DEMO delete a note
// $ node notes delete note-1676382448483
// note deleted (note-1676382448483.txt)

// DEMO list notes
// $ node notes list
// note-1676382448483
// note-1676382467270
// note-1676382496443
// note-1676383826688
// note-1676383832973
// note-1676385834604

const [, , operation] = process.argv

const fs = requires('fs')

if (operation === 'add') {
    if (process.argv.length === 4) {
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
    } else if (process.argv.length === 5) {
        const noteId = process.argv[3]
        const file = noteId + '.txt'

        const newText = process.argv[4]

        const { readFile, writeFile } = fs

        readFile(file, 'utf8', (error, content) => {
            if (error) {
                console.error('could not read note, because of error: ' + error.message)

                return
            } else if () {

            })

        }
        }

        }
}






// const [, , operation] = process.argv

// const fs = require('fs')


// if (operation === 'add') {
//     if ( process.argv.length === 4) {}
//     const content = process.argv[3]

//     const { writeFile } = fs

//     const file = 'note-' + Date.now() + '.txt'

//     writeFile(file, content, 'utf8', error => {
//         if (error) {
//             console.error('could not write note, because of error: ' + error.message)

//             return
//         }

//         console.log('note created (' + file + ')')
//     })
// } else if (operation === 'get') {
//     const noteId = process.argv[3]

//     const { readFile } = fs

//     const file = noteId + '.txt'

//     readFile(file, 'utf8', (error, content) => {
//         if (error) {
//             console.error('could not read note, because of error: ' + error.message)

//             return
//         }

//         console.log(content)
//     })
// } else if (operation === 'set') {
//     const noteId = process.argv[3]
//     const content = process.argv[4]

//     const { writeFile } = fs

//     const file = noteId + '.txt'


//     writeFile(file, content, 'utf8', (error, content) => {
//         if (error) {
//             console.error('could not read note, because of error: ' + error.message)

//             return
//         }

//         console.log(content)
//     })
// } else if (operation === 'modify') {
//     const noteId = process.argv[3]
//     const content = process.argv[4]

// }
