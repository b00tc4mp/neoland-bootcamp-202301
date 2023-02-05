// case-0 -> happy path
//var stickyId = stickies[0].id;
//var email = stickies[0].user;
//var previousLength = stickies.length;

user.length = 0 
var user = {
  name: "pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123"
}
users.push(user)

stickies.length = 0
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo!",
  visibility: "private",
}
stickies.push(sticky)
var stickyId = stickies[0].id;

deleteSticky('pepito@grillo.com', stickyId)
verify(stickies.length === 0 )


// case-1 -> unhappy path sticky does not exist

user.length = 0 
var user = {
  name: "pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123"
}
users.push(user)

stickies.length = 0
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo!",
  visibility: "private",
}
stickies.push(sticky)
var stickyId = 'sticky-100';

try {
  deleteSticky('pepito@grillo.com', stickyId);
} catch (error) {
  verify(error.message === 'sticky with id ' + stickyId + ' not found');
}

// case-2 -> unhappy path user does not exist
users.length = 0

var user = {
  name: "pepito grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123"
}
users.push(user)

stickies.length = 0
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo!",
  visibility: "private",
}
stickies.push(sticky)
var sticky = stickies[0].id

try {
  deleteSticky('pepito@grillo2.com', stickyId);
} catch (error) {
  verify(error.message === "user with email 'pepito@grillo2.com' not found");
}

// case-3 -> unhappy path sticky does not belong to the user
user.length = 0
var user = {
  name: "pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123"
}
users.push(user)

sticky.length = 0
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo!",
  visibility: "private",
}
stickies.push(sticky)

var stickyId = stickies[1].id

try {
  deleteSticky("pepito@grillo.com", stickyId);
} catch (error) {
  verify(error.message ===
      "sticky with id '+ stickyId +' does not belong to user with email 'pepito@grillo.com'"
  );
}