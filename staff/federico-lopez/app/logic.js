// database

var users = [];
var stickies = [];

// filling database

// POPULATE
var user = {
  name: "Pepito Grillo",
  email: "pepito@gillo.com",
  password: "123123123",
};

users.push(user);

var user = {
  name: "Wendy Darling",
  email: "wendy@darling.com",
  password: "123123123",
};

users.push(user);

var user = {
  name: "Peter Pan",
  email: "peter@pan.com",
  password: "123123123",
};

users.push(user);

console.log(users);

var sticky = {
  text: "hola mundo",
  visibility: "private",
  user: "pepito@grillo.com",
};

stickies.push(sticky);

var sticky = {
  text: "hello world",
  visibility: "public",
  user: "wendy@darling.com",
};

stickies.push(sticky);

var sticky = {
  text: "hello world",
  visibility: "public",
  user: "peter@pan.com",
};

stickies.push(sticky);

// console.log(stickies)
// POPULATE FINISH

// business logic

/**
 * Registers a user in the database
 *
 * @param {string} name The user full name
 * @param {string} email The user email
 * @param {string} password The user password
 */
function registerUser(name, email, password) {
  // TODO validate that the email does not belong to other user registered

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email) {
      return;
    }
  }

  var userToCreate = {
    name,
    email,
    password,
  };

  //   var user = {
  //     name: name,
  //     email: email,
  //     password: password,
  //   };

  users.push(userToCreate);
}

// tests

registerUser("John Doe", "john@doe.com", "123123123");
console.log(users);

debugger;
registerUser("Jane Doe", "jane@doe.com", "123123123");
console.log(users);

registerUser("John Doe", "john@doe.com", "123123123");
console.log(users);

/**
 * Creates a new sticky in the database
 *
 * @param {string} user The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(user, text, visibility) {
  // TODO: implement me
}

// tests

createSticky("peter@pan.com", "hello wendy", "public");
// console.log(stickies)

createSticky("wendy@pdarling.com", "hello peter ,)", "public");
// console.log(stickies)
