//case-0 -> happy path

users.length=0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)
stickies.length=0
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'private',
    user: 'pepito@grillo.com'
}

stickies.push(sticky)

 var stickyId= stickies[0].id;
// var email= stickies[0].user;
// var previousLength = stickies.length;

deleteSticky('pepito@grillo.com', stickyId);

verify(stickies.length === 0);

// //case-1 unhappy path sticky does not exist
users.length=0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)
stickies.length=0
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'private',
    user: 'pepito@grillo.com'
}

stickies.push(sticky)

 var stickyId= 'sticky-2000';


try {
  deleteSticky( 'pepito@grillo.com', stickyId)
} catch (error) {
     verify(error.message === "sticky with id '" + stickyId +"' not found")
     verify(stickies.length === 1)
    }

// case-2 unhappy path user does not exist

users.length=0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)
stickies.length=0
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'private',
    user: 'pepito@grillo.com'
}

stickies.push(sticky)

 var stickyId= stickies[0].id;


var stickyId= stickies[0].id
 try {
    deleteSticky('pepit@grillo.com',stickyId)
 } catch (error) {
    verify(error.message === "user with email 'pepit@grillo.com' not found")
   
}


// case-3 unhappy path sticky does not belong to the user
users.length=0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)


stickies.length=0
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'private',
    user: 'wendy@darling.com'
}

stickies.push(sticky)


 var stickyId= stickies[0].id;

 try {
   deleteSticky('pepito@grillo.com',stickyId)
 } catch (error) {
    verify(error.message === "sticky with id '" + stickyId+ "' does not belong to user with email 'pepito@grillo.com'")
    verify(stickies.length === 1)
 }