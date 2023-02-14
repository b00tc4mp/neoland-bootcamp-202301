// DEMO
// $ node notes add "hola mundo"
// note created (note-131313412343.txt)

const [, , command, content] = process.argv //le paso los parametros por la terminal (add y 'hola mundo')

const fs = require('fs') //me traigo la caja de herramientas de node

if (command === "add") {
    const {writeFile} = fs // traemos el writeFile de la caja de herramientas
 
    const file = 'note-' + Date.now() + '.txt' // nombre del fichero + tiempo + tipo de texto txt


    // si hay error, nos lo informa y sale, si no hay error crea la nota e imprime su nombre
    writeFile(file, content, 'utf8', error => {
        if (error) {
            console.error('could not write note, because of error: ' + error.message)

            return
        }

        console.log('note created (' + file + ')')
    })

}

