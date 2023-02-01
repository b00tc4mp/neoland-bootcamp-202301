/**
 * publica los stickies privados
 * 
 *@return {array} the private stickies
 */
// function updateStickyVisibility(){
    function updateStickyVisibility(email, stickyId, visibility) {
        /*
        buscar usuario con ese mail( si no existe, error)
        buscar sticky con ese stickyId (si no existe, error)
        comprobar que el mail coincide con el sticky user(si no coincide, error)
        si todo lo anterior se cumple puedo cambiar la visibilidad del sticky)
        */
        // es falso porque aún no he encontrado el usuario
        var userFound = false
        
        for (var i = 0; i < users.length && !userFound; i++) {
            
    
            var user = users[i]
    
    
            if (user.email === email) userFound = true
    
        }
        if (!userFound) throw new Error('user with email ' + email + ' not found')
        var foundSticky
    
        for (var i = 0; i < stickies.length && !foundSticky; i++) {
            var sticky = stickies[i]
    
            if (sticky.id === stickyId) foundSticky = sticky
    
        }
    
        if (!foundSticky) throw new Error('sticky with id ' + stickyId + ' not found')
    
        if (foundSticky.user !== email) throw new Error('sticky with id ' + stickyId + ' does not belong to user with email ' + email)
    
        foundSticky.visibility = visibility
        
    
    
    }
//   var privateStickies= stickies.filter(sticky => sticky.visibility === 'private')
//   if(privateStickies) return privateStickies 


  //var privateUser = users.find(user => user.email === email)


//  var privateStickies= stickies.filter(sticky => sticky.visibility === 'private')
//   //var privateUser = users.find(user => user.email === email)
//   if (privateStickies) return privateStickies
//    var allStickies= stickies.every(sticky => sticky.user === window.email)
//   var privateStickies= stickies.filter( sticky => sticky.visibility==='private')
//   if(allStickies === privateStickies)return stickies[privateStickies]

   

//   var privateStickies = []
//     for (var i = 0; i < stickies.length; i++) {
//         var sticky = stickies[i]
//         if (sticky.visibility === 'private')
//             privateStickies.push(sticky)


// }
// return privateStickies.reverse()





