const fs = require('fs')
const deleteAllFilesFromDirectory = require('./deleteAllFilesFromDirectory')
const { verify } = require('./test-it')

// case 0

const { writeFile } = fs

const limit = 5

let countCreations = 0

for (let i = 0; i < limit; i++) {
    const file = 'temp/file-' + i + '.data'

    const content = 'hola mundo'

    writeFile(file, content, 'utf8', error => {
        if (error) {
            console.error(error.message)

            return
        }

        countCreations++

        if (countCreations === limit) {
            //console.log('ok, all files created')

            deleteAllFilesFromDirectory('temp', error => {
                if (error) {
                    console.error(error.message)

                    return
                }

                //console.log('ok, all files deleted successfully')

                const { readdir } = fs

                readdir('temp', (error, files) => {
                    if (error) {
                        console.error(error.message)

                        return
                    }

                    verify(files.length === 0)
                })
            })
        }
    })
}