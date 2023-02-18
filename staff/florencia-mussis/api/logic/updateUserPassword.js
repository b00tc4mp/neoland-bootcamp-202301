const { readFile } = require('fs')

// TODO
// 1. readFile -> user
// 2. user.password === newpassword
// 3. update o error

function updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat, callback) {
   const file = userId + '.json'
   const filePath = 'data/users/' + file

    readFile(filePath, 'utf8', (error, json) => {
        if (error) {
            callback(error)
            return
        }

        const user = JSON.parse(json)

        const userId = file.slice(0, -5)

        
    
        if (countReads === files.length) {
            const user = users.find(user => user.password === password)
            
            if (!user) {
                callback(new Error('user not found'))
                return
            }
        
            if (user.password !== password) {
                callback(new Error ('wrong credentials'))
                return
            }

            callback(null, user.id)
            }
        })  
    })      
}

module.exports = updateUserPassword