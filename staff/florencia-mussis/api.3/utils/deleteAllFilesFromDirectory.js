const { readdir, unlink } = require('fs')

function deleteAllFilesFromDirectory(directoryPath, callback) { //el calback nos informara si ha terminado
    //readdir funcion asincrona, le pasamos callback para que nos avise cuando termino
    readdir(directoryPath, (error, files) => {

        if (error) { //si hay algo mal informa y se va con el return, no continua
            callback(error)
            return
        }

        if(!files.length){
            callback(null)
            return
        }

        let countDeletions = 0 

        files.forEach(file => {
            const filePath = directoryPath + '/' + file

            //unlink asincrono, hay que esperar que termine de borrar para saber cuando termina hacemos el contador, llamara al callback cuando termine de borrar o ha fallado
            unlink(filePath, error => {
                if (error){
                    callback(error) 
                    return
                }

                //si no hay error contamos

                countDeletions++

                if (countDeletions === files.length) {
                    callback(null) // cuando se de el if, enviamos el  null para avisar que no ha habido error y terminamos
                }
            })
        })
    })
}

module.exports = deleteAllFilesFromDirectory //exportara la funcion