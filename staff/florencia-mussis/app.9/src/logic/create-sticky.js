import { validateCallback, validateText, validateToken, validateVisibility, ClientError, ServerError, ExistenceError } from 'com'
/**
 * Creates a new sticky in the database
 * 
 * @param {string} token TThe session token
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 *  * @param {function} callback The function  to call when the 
 */

function createSticky(token, text, visibility, callback) { 
    validateToken(token)
    validateText(text)
    validateVisibility(visibility)
    validateCallback(callback)
    
    const xhr = new XMLHttpRequest()
    
    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 201) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }

    }
    xhr.onerror = () => callback(new Error('network error'))
    
    xhr.open('POST', 'http://localhost:8080/stickies')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { text, visibility }
    const json = JSON.stringify(payload)

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

