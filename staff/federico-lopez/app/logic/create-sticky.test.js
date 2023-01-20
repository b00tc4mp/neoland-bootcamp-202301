// case 0

var users = [{ email: "peter@pan.com", password: "123123123" }];
var stickies = [];

function createSticky(user, text, visibility) {
  for (var i = 0; i < users.length; i++) {
    var userInDb = users[i];

    if (userInDb.email === user) {
      var newSticky = {
        user,
        text,
        visibility,
      };

      stickies.push(newSticky);

      return;
    }
  }
  throw new Error("user not found");
}

createSticky("peter@pan.com", "hello wendy", "public");
console.log(stickies);

// case 1

try {
  createSticky("wendy@pdarling.com", "hello peter ,)", "public");
} catch (error) {
  console.log("it threw a correct error");
  console.log(stickies);
}
