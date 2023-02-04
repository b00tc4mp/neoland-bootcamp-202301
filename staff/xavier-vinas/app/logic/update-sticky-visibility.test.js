// case 0 

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)
stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'pepito@grillo.com',
    text: 'hola mundo',
    visibility: 'private'
}
stickies.push(sticky)
var stickyId = stickies[0].id

updateStickyVisibility('pepito@grillo.com', stickyId, 'public')

verify(stickies[0].visibility === 'public')


// case 1 el usuario no coincide


users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)
stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'pepito@grillo.com',
    text: 'hola mundo',
    visibility: 'private'
}
stickies.push(sticky)
var stickyId = stickies[0].id

try{
    uptadeStikyVisibility ("malemail@hotmail.com", stickyId , "private")
}catch(error ) {
    verify (error.message === 'user with email ' + email + ' not found')
}


// case 2 no coincide la id del stiky

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)
stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'pepito@grillo.com',
    text: 'hola mundo',
    visibility: 'private'
}
stickies.push(sticky)
var stickyId = stickies[0].id

try{
    updateStickyVisibility ("pepito@grillo.com", "sticky-999", "private" )

}catch( error ){
 verify ( error.message === `sticky with id ${stickyId} does not belong to user with email ${email}`)
}

// caso 3 el sticky no corresponde 

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)
stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'wendy@darling.com',
    text: 'hello world',
    visibility: 'public'
}
stickies.push(sticky)
var stickyId = stickies[0].id

try {
    updateStickyVisibility ("pepito@grillo.com", stickyId , " public")
    
} catch (error) {
    (error.message === `sticky with id ${stickyId} not found` )
    
}
// case 4 
users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)
stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'pepito@grillo.com',
    text: 'hola mundo',
    visibility: 'private'
}
stickies.push(sticky)
var stickyId = stickies[0].id

try {
    updateStickyVisibility ("pepito@grillo.com" , sticky , "public")
} catch (error) {
    (error.message === `sticky visibility with id ${stickyId} wrong`)
}

