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
// $ node notes add-text note-1676382448483 'ciao mondo'
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

// operation= command = metodo

const [, , operation] = process.argv //operation: add--> crear el archivo

const fs = require('fs')

if (operation === 'add') {
    if (process.argv.length === 4) { //si el largo de process.argv.length es 4
        const content = process.argv[3] //el contenido esta en la posicion 3: node notes add "hola mundo"

        const { writeFile } = fs

        const file = 'note-' + Date.now() + '.txt' //nombre del archivo

        writeFile(file, content, 'utf8', error => {
            if (error) {
                console.error('could not write note, because of error: ' + error.message)

                return
            }
            console.log('note created (' + file + ')')
        })
    } else if (process.argv.length === 5) { //añadir contenido a un archivo
        const noteId = process.argv[3] //id del archivo
        const newContent = process.argv[4]
        const { readFile, writeFile } = fs

        const file = noteId + '.txt'

        readFile(file, 'utf8', (error, previousContent) => {
            if (error) {
                console.error('could not read note, because of error: ' + error.message)

                return
            }
            const allContent = previousContent + '\n' + newContent //va a escribir el viejo contenido y el nuevo
            writeFile(file, allContent, 'utf8', error => {
                if (error) {
                    console.error('could not write note, becaise of error: ' + error.message)
                    return
                }
            })
            console.log('note (' + file + ')updated')
        })
    }
} else if (operation === 'get') { //imprime el contenido del archivo en la consola
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
} else if (operation === 'set') { //actualiza el contenido del archivo
    const noteId = process.argv[3]

    const content = process.argv[4] //contenido a escribir

    const { writeFile } = fs

    const file = noteId + '.txt'

    writeFile(file, content, 'utf8', error => {
        if (error) {
            console.error('could not write note, becaise of error: ' + error.message)
            return
        }
        console.log('note (' + file + ')updated')
    })
   
} else if (operation === 'delete'){ //borrar un archivo
    const noteId = process.argv[3]
    const {unlink} = fs
    const file = noteId + '.txt'

    unlink(file, error => {
        if (error) {
            console.error('could not delete note, becaise of error: ' + error.message)
            return
        }
        console.log ('note (' + file + ')deleted')
    } )
} else if (operation === 'list'){ //listar los archivos
    const folder = process.argv[3]
    const {readdir} = fs

    readdir(folder, (error, files)=>{
        if (error) {
            console.error('could not found files, becaise of error: ' + error.message)
            return
        }
        for (var i= 0; i < files.length; i++){
            const element = files[i]
            if (element.slice(-4) === '.txt'){ //si lo que le quitamos es .txt entonces imprime
                console.log(element)
            }
        }
    })
}

//node baby-steps/notes list baby-steps