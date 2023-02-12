
// /**
//  * Updates the user password
//  * 
//  * @param {string} id sticky id
//  * @param {string} user user email
//  * @param {string} visibility public or private
//  */

//case 0 
 //the user wants to change sticky visibility and the sticky belong to him
//  sticky.length = 0
//  var sticky = {
//      id: createStickyId(),
//      user: "pepito@grillo.com",
//      text: "hola mundo!",
//      visibility: "private",
//  }
// stickies.push(sticky)

// function changeStickyVisibility(id,user, visibility) 
//     var stickies = sticky.find(user => user.visibility === visibility)

// changeStickyVisibility('pepito@grillo.com','id', 'private')
// verify(sticky[0].visibility === private)

// // case 1 
// // the user wants to change sticky visibility and the sticky does not belong to him. 

// sticky.length = 0
// var sticky = {
//     id: createStickyId(),
//     user: "pepito@grillo.com",
//     visibility: "private",
// }
// stickies.push(sticky)

// try {
//     changeStickyVisibility('id','pepito@grillo2.com', 'public');
//   } catch (error){
//     // expected output: 'user with email wrong@user.com not found'
//   verify(error.message === 'user with email pepito@grillo2.com not found')
// }
