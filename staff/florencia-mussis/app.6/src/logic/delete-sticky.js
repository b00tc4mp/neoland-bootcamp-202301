import { validateCallback, validateStickyId, validateUserId } from 'com'

function deleteSticky(userId, stickyId, callback){
    validateUserId(userId)
    validateStickyId(stickyId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const {status} = xhr

        if (status === 500) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body
            
            callback( new Error (error))

            return
        }
        
        callback(null)
    }
    xhr.onerror = () => callback(new Error('network error'))
    
    xhr.open('DELETE', `http://localhost:8080/stickies/${stickyId}`)
    xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
    xhr.send()
}

export default deleteSticky

// function deleteSticky(userId, stickyId) {
//     var userExists = false; //primero valido que exista el usuario, parto de que no existe
  
//     for (var i = 0; i < users.length && !userExists; i++) { //!userExists: NO existe
//       var user = users[i];
  
//       if (user.email === email) userExists = true; //si existe pasamos userExist a verdadero
//     }
  
//     //   if (!userExists) throw new Error("user with email " + email + " not found");
//     if (!userExists) throw new Error(`user with email ${email} not found`); //si el usuario no existe lanza error
  
//     var stickyIndex; //necesitamos el indice para saber luego donde esta el elemento que queremos borrar
  
//     for (var i = 0; i < stickies.length && stickyIndex === undefined; i++) { // no negamos stickyIndex pq puede ser 0 entonces le ponemos undefined, mientras sea undefined que continue el bucle, cuando deje de estarlo que lo corte
//       var sticky = stickies[i];
  
//       if (sticky.id === stickyId) stickyIndex = i;
//     }
  
//     if (stickyIndex === undefined) // como sticky es 0 y no es undefined no envia el error
//       throw new Error(`sticky with id ${stickyId} not found`);
  
//     var stickyFound = stickies[stickyIndex];

//     if (stickyFound.user !== email) { //del sticky que encontre veo si coindice el usuario, si coincide no lanzo el error
//       throw new Error(
//         `sticky with id '${stickyId}' does not belong to user with email '${email}'`
//       );
//     }
  
//     for (var i = stickyIndex; i < stickies.length - 1; i++) { //recorro el array partiendo de la posicion que quiero borrar y sucesivamente vamos sobreescribiendo en la posicion del elemnto que queremos borrar el elemento de la posicion siguiente
//       stickies[i] = stickies[i + 1]; //luego voy sobreescribiendo y corriendo los elementos una posicion hacia la izquierda
//     }
  
//     // stickies.length = stickies.length - 1;
//     stickies.length--; // como el ultimo quedo repetido le sacamos un elemento al array.
//   }