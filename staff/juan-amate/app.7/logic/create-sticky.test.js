// case 0

createSticky('peter@pan.com', 'hello wendy', 'public');
// console.log(stickies);
verify(stickies.length === 5)

// case 1

createSticky('wendy@darling.com', 'hello peter ,)', 'public');
// console.log(stickies);
verify(stickies.length === 6)

// case 2

try {
  createSticky('peter@pan2.com', 'hello wendy', 'public');
} catch (error) {
  // console.error(error.message)
  verify(error.message === 'user with email peter@pan2.com not found')
}