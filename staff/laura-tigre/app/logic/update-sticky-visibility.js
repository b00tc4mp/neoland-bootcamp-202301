/**
 * publica los stickies privados
 * 
 *@return {array} the private stickies
 */
function updateStickyVisibility(){
    privateStickies=[]
  var privateSticky= stickies.find(sticky => sticky.visibility === 'private')
  if(privateSticky) privateStickies.push(privateSticky)
  return privateStickies.reverse()
// var privateStickies = []
//     for (var i = 0; i < stickies.length; i++) {
//         var sticky = stickies[i]
//         if (sticky.visibility === 'private')
//             privateStickies.push(sticky)


// }
// return privateStickies.reverse()
}




