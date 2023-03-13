//node show + fichero que quiero leer
const file= process.argv[2]
const fs= require('fs')
const{readFile}= fs

readFile(file, 'utf8',(error, content)=>{
    if(error){
        console.error('could not read file, because '+ error.message)
        return
    }
    console.log(content)
})
