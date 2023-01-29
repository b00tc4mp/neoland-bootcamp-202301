/**
 * publica los stickies privados
 * 
 *@return {array} the private stickies
 */
function updateStickyVisibility(){
    //privateStickies=[]
  var privateSticky= stickies.filter(sticky => sticky.visibility === 'private')
  if(privateSticky) //privateStickies.push(privateSticky)
  return privateSticky //privateStickies.reverse(privateSticky)
// var privateStickies = []
//     for (var i = 0; i < stickies.length; i++) {
//         var sticky = stickies[i]
//         if (sticky.visibility === 'private')
//             privateStickies.push(sticky)


// }
// return privateStickies.reverse()
}




