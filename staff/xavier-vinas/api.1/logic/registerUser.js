const {writeFile}= require("fs")

function registerUser(name, age, email, password, callback){

    const user = {
        name,
        age,
        email,
        password,
    }

    const userId = "user-" + Date.now()
    const fileName = userId + ".json"
    const filePath = "data/users/" + fileName
    const userJson = JSON.stringify(user, null, 4)

    writeFile(filePath , userJson, "utf-8", error =>{
        if (error){
            callback(error)
            return
        }
        callback(null,userId)
    })
}
module.exports = registerUser