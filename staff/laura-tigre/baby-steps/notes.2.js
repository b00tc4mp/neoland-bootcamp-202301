//node notes add 'hola mundo'
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


const [, , operation]= process.argv

const fs= require('fs')


if(operation=== 'add'){
    if(process.argv.length=== 4){
    const content= process.argv[3]
    const{writeFile}=fs
    const file = 'note-' +Date.now() + '.txt'
    
   

    writeFile(file,content, 'utf8', error=>{
        if(error){
            console.error('could not write note, because of error: ' + error.message)
            return
        }
        console.log('note created (note-' +file + ')')
    })

}else if(process.argv.length=== 5){
    
        const noteId= process.argv[3]
        const newContent= process.argv[4]
        const {readFile, writeFile}= fs
        const file = noteId +'.txt'
        
    
        readFile(file, 'utf8',(error, previousContent)=>{
            if(error){
                console.error('could not read file, because '+ error.message)
                return
            }
            const allContent = previousContent + '\n ' + newContent
            writeFile(file,allContent, 'utf8', error=>{
                if(error){
                    console.error('could not write note, because of error: ' + error.message)
                    return
                }
                console.log('note update (' +file + ')')
            })
        
        })
        
    

    

}else if (operation==='get'){
    const noteId= process.argv[3]
    const{readFile}= fs
    const file = noteId +'.txt'
    readFile(file, 'utf8',(error, content)=>{
        if(error){
            console.error('could not read file, because '+ error.message)
            return
        }
        console.log(content)
    })
}else if(operation=== 'set'){
    const noteId= process.argv[3]
    const content= process.argv[4]
    const{writeFile}=fs
    const file = noteId +'.txt'

    writeFile(file,content, 'utf8', error=>{
        if(error){
            console.error('could not write note, because of error: ' + error.message)
            return
        }
        console.log('note update (' +file + ')')
    })



}

}else if(operation=== 'delette'){
    const noteId= process.argv[3]
    const file = noteId +'.txt'

    const{unlink}=fs

    unlink(file, error => {
        if(error){
        console.error('could not write note, because of error: ' + error.message)
        
        
    }
    console.log('note update (' +file + ')')
    })

}else if (operation==='list'){
    const folder= process.argv[3]
    const {readdir}= fs
 
    readdir(folder,(error, files)=>{
        if(error){
            console.error('could not found files, because of error: ' + error.message)
            return
        }
        for(var i=0; i<files.length; i++) {
            const element= files[i]
            if(element.slice(-4)=== '.text'){
                console.log(element)
            }

        }
    })

}
//node baby-steps/notes list baby-steps