/**
 * Creates a new sticky in the database
 * 
 * @param {string} userId The userId the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 *  * @param {function} callback The function  to call when the 
 */

function createSticky(userId, text, visibility, callback) { 
    const xhr = new XMLHttpRequest()
    
    xhr.onload = () => {
        const { status } = xhr

        if (status === 500) { //miro el status
            const { response } = xhr

            const body = JSON.parse(response) //CONVIERTE LA RTA EN BODY PARSE

            const { error } = body
            
            callback( new Error(error))

            return
        }

        callback(null)

    }

    xhr.open('POST', 'http://localhost:8080/stickies')
    xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const sticky = { text, visibility }
    const json = JSON.stringify(sticky)

    xhr.send(json)
}

export default createSticky





//   for (var i = 0; i < users.length; i++) { 
//     var userInDb = users[i];

//     if (userInDb.email === email) {
//       var newSticky = {
//         id: createStickyId(),
//         user: email,
//         text,
//         visibility,
//         likes: []
//       }

//       stickies.push(newSticky);

//       return;
//     }
//   }

//   throw new Error("user not found");
// }


  //   var userExists = false;

  //   for (var i = 0; i < users.length && !usersExists; i++) {
  //     var userInDb = users[i];

  //     if (userInDb.email === user) {
  //       userExists = true;
  //     }
  //   }

  //   if (!userExists) throw new Error("user not found");

  //   var newSticky = {
  //     user,
  //     text,
  //     visibility,
  //   };

  //   stickies.push(newSticky);

