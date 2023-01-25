// case 0

authenticateUser("pepito@grillo.com", "123123123");

// case 1

try {
  authenticateUser("pepito@grillo.com", "_123123123");
} catch (error) {
  verify( error.message === "wrong credentials")
}

// case 2

try {
  authenticateUser("pepito@grill.com", "123123123");
} catch (error) {
 verify( error.message === "wrong credentials")
}
