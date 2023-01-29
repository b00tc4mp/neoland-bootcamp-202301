/**
 * Register a user in the database
 *
 * @param {string} name The user fill name
 * @param {number} age The user fill name
 * @param {string} email The user email
 * @param {string} password The user password
 */
function registerUser(name, age, email, password) {
  if (age < 18) throw new Error('user is under 18 years old')

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email) throw new Error('user with email ' + email + ' already exists')
  }

  var user = {
    name,
    age,
    email,
    password
  };

  users.push(user)
}