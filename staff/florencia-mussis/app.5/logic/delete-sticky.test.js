// case-0

users.length = 0;
var user = {
  name: "Pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123",
};
users.push(user);

stickies.length = 0;
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo",
  visibility: "private",
};
stickies.push(sticky);

var stickyId = stickies[0].id;

deleteSticky("pepito@grillo.com", stickyId);

verify(stickies.length === 0);

// case-1 -> unhappy path sticky does not exist

users.length = 0;
var user = {
  name: "Pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123",
};
users.push(user);

stickies.length = 0;
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo",
  visibility: "private",
};
stickies.push(sticky);

var stickyId = "sticky-100";

try {
  deleteSticky("pepito@grillo.com", stickyId);
} catch (error) {
  verify(error.message === "sticky with id " + stickyId + " not found");
}

// // case-2 -> unhappy path user does not exist

users.length = 0;
var user = {
  name: "Pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123",
};
users.push(user);

stickies.length = 0;
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo",
  visibility: "private",
};
stickies.push(sticky);

var userEmail = "wrong@email.com";


try {
  deleteSticky("wrong@email.com", stickyId);
} catch (error) {
  verify(error.message === "user with email wrong@email.com not found");
}


// case-3 -> unhappy path sticky does not belong to the user

users.length = 0;
var user = {
  name: "Peter Pan",
  age: 50,
  email: "peter@pan.com",
  password: "123123123",
};
users.push(user);

stickies.length = 0;
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo",
  visibility: "private",
};
stickies.push(sticky);

var stickyId = stickies[0].id

try {
  deleteSticky("peter@pan.com", stickyId);
} catch (error) {
  verify(error.message === "sticky with id " + stickyId + " does not belong to user with email peter@pan.com");
}
