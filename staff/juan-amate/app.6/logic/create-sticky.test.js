// case 0

createSticky('peter@pan.com', 'hello wendy', 'public');
// console.log(stickies);

// case 1

createSticky('wendy@darling.com', 'hello peter ,)', 'public');
// console.log(stickies);

// case 2

try {
  createSticky('peter@pan2.com', 'hello wendy', 'public');
} catch (error) {
  // console.log(error(error.message));
}