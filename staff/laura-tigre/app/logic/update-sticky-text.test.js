//case 0 -> Happy path

updateStickyText("wendy@darling.com", "sticky-1", "this is the new text");

console.log(stickies);
// expected ouput: [{...}, { id: 'sticky-1', user: 'wendy@darling.com', text: 'this is the new text'}, ...]

// case 1 -> User not found
try {
  updateStickyText("wrong@user.com", "sticky-1", "this is the new text");
} catch (error) {
  //console.log(error);
  verify(error.message === 'user with email wrong@user.com not found')
  // expected output: 'user with email wrong@user.com not found'
}

// case 2 -> Sticky not found
try {
  updateStickyText("wendy@darling.com", "wrong-id", "this is the new text");
} catch (error) {
  //console.log(error);
  verify(error.message ==='sticky with id wrong-id not found' )
  // expected output: 'sticky with id wrong-id not found')
}

// case 3 -> Sticky does not belong to the user
try {
  updateStickyText("pepito@grillo.com", "sticky-1", "this is the new text");
} catch (error) {
  //console.log(error);
  verify(error.message === 'sticky with id sticky-1 does not belong to user with email pepito@grillo.com')
  // expected output: 'sticky with id sticky-1 does not belong to user with email pepito@grillo.com'
}