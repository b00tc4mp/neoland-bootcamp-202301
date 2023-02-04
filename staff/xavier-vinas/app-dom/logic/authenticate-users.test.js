// case 0
user.length = 0 // vacio el array para que solo tengamos un objeto
var user = {   // creo el objeto 
  name: "Pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123",
};
users.push(user); // lo pusheo
//compruebo que todo sea igual 
authenticateUser("pepito@grillo.com", "123123123");

// case 1
// en este test quiero comprobar que si la contraseña no coincide me de fallo 
user.length = 0;
var user = {
  name: "Pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123",
};

users.push(user);
try {
  authenticateUser("pepito@grillo.com", "_123123123"); // aqui le hago fallar 
} catch (error) {
  verify(error.message === "wrong credentials");
}

// case 2
// en este quiero me de fallo si no coincide el email
users.length = 0;
var user = {
  name: "Pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123",
};

users.push(user);

try {
  authenticateUser("pepito@grill.com", "123123123");
} catch (error) {
  verify(error.message === "wrong credentials");
}
