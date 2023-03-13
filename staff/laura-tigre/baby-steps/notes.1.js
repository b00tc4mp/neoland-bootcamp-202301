//node notes add 'hola mundo'
const [, , command, content]= process.argv

const fs= require('fs')

if(command=== 'add'){
    const{writeFile}=fs
    const file = 'note-' +Date.now() + '.txt'


    writeFile(file,content, 'utf8', error=>{
        if(error){
            console.error('could not write note, because of error: ' + error.message)
            return
        }
        console.log('note created (' +file + ')')
    })
}
