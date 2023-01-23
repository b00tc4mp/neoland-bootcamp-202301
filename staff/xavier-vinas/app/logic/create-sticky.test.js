// case 0

createSticky("peter@pan.com", "hello wendy", "public");
// console.log(stickies)

// case 1

createSticky("wendy@darling.com", "hello peter", "public");
// console.log(stickies)

try {
  createSticky(" peter@pan2", "hello wendy", "public");
} catch (error) {}
