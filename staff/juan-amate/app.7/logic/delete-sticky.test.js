// case-0 -> happy path
var stickyId = stickies[0].id;
var email = stickies[0].user;
var previousLength = stickies.length;

deleteSticky(email, stickyId);

verify(stickies[0].id !== stickyId);
verify(stickies.length === previousLength - 1);

// case-1 -> unhappy path sticky does not exist
try {
  deleteSticky(email, "wrong-id");
} catch (error) {
  verify(error.message === "sticky with id 'wrong-id' not found");
}

// case-2 -> unhappy path user does not exist
var stickyId = stickies[0].id;

try {
  deleteSticky("wrong@email.com", stickyId);
} catch (error) {
  verify(error.message === "user with email 'wrong@email.com' not found");
}

// case-3 -> unhappy path sticky does not belong to the user
try {
  deleteSticky("pepito@grillo.com", "sticky-1");
} catch (error) {
  verify(error.message === "sticky with id 'sticky-1' does not belong to user with email 'pepito@grillo.com'");
}