//database

var users = [];
var stickies = [];

//filling database

var user = {
  name: "Pepito Grillo",
  email: "pepito@grillo.com",
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

//console.log(stickies)

// business logic

/**
 * Register a user in the database
 *
 * @param {string} name The user fill name
 * @param {string} email The user email
 * @param {string} password The user password
 */
function registerUser(name, email, password) {
  //TODO: implement me

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email) {
      return;
    } else {
      users.push({
        name,
        email,
        password,
      });
    }
  }
}
// tests

registerUser("John Doe", "john@doe.com", "123123123");
console.log(users);

registerUser("Jane Doe", "jane@doe.com", "123123123");
console.log(users);

/**
 * Creates a new sticky in the database
 *
 * @param {string} user The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(user, text, visibility) {
  //TODO: implement me
  var newSticky = {
        user,
        text,
        visibility
      };
      stickies.push();
    }

// tests

createSticky("peter@pan.com", "hello wendy", "public");
console.log(stickies);

createSticky("wendy@darling.com", "hello peter ,)", "public");
console.log(stickies);

