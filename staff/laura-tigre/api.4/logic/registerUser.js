

function registerUser(name, age, email, password){
     const users= process.db.collection('users')
    
     const user = {
        name,
        age,
        email,
        password
    }
    
    return users.insertOne(user)
    
}
module.exports= registerUser
// readdir('data/users', (error,files)=>{
//     if(error){
//         callback(error)
//         return
//     }
//     if(!files.length){
//         const user={
//             name,
//             age,
//             email,
//             password,
//         }
        
//         const userId = 'user-'+Date.now()
//         const fileName= userId + '.json'
//         const filePath= 'data/users/' + fileName
//         const userJson= JSON.stringify(user, null, 4)
        
//         writeFile(filePath, userJson, 'utf8', error => {
//             if (error) {
//                 callback(error)

//                 return
//             }

//             callback(null,userId)
//         })
        
//         return

//     }
//     const emails=[]
    
//     let countRead=0

//     files.forEach(file=> {
//         const filePath= 'data/users/' +file

//         readFile(filePath,'utf8',(error,json)=>{
//             if (error){
//                 callback(error)
//                 return
//             }
//             const user= JSON.parse(json)

//             emails.push(user.email)

//             countRead++

//             if(countRead === files.length){

//                 if (emails.includes(email)){
//                     callback(new Error ('user already registered'))
//                     return
//                 }
//                 const user={
//                     name,
//                     age,
//                     email,
//                     password,
//                 }
                
//                 const userId = 'user-'+Date.now()
//                 const fileName= userId + '.json'
//                 const filePath= 'data/users/'+fileName
//                 const userJson= JSON.stringify(user,null,4)
                
//                 writeFile(filePath,userJson,'utf8',error=>{
//                     if(error){
//                         callback(error)
//                         return
//                     }
//                     callback(null,userId)
//                 })
                
//             }

//         })
//     })
// })

