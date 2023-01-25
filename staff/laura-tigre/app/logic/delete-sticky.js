function deleteSticky(email,stickyId){
 var userExists = false

  for (var i=0; i< users.length && !userExists; i++){
    var user= users[i]

    if (user.email===email) userExists=true
  }
  //if(!userExists) throw new Error("user with email " + email + " not found")
  if(!userExists) throw new Error (`user with email '${email}' not found`);
  
  var stickyIndex;
// en el caso que el stickyIndex = 0 la negación de 0 da igual a verdadero por lo que le quitamos la negación y le ponemos undefined
  for (var i = 0; i < stickies.length && stickyIndex=== undefined; i++) {
     var sticky= stickies[i];

     if (sticky.id === stickyId) stickyIndex= i
    
  }
  if (stickyIndex===undefined) throw new Error (`sticky with id '${stickyId}' not found`)

    var stickyFound= stickies[stickyIndex]
   
   if (stickyFound.user !== email){
    throw new Error (`sticky with id '${stickyId}' does not belong to user with email '${email}'`)
   }
  
   for ( var i= stickyIndex ; i< stickies.length -1; i++){
    stickies[i]= stickies[i +1]

   }
   stickies.length--

}
