var sticky = {
    id: createStickyId(),
    user: "pepito@grillo.com",
    text: "hola mundo",
    visibility: "private",
    likes: []
  }
  
  stickies.push(sticky)
  
  var sticky = {
    id: createStickyId(),
    user: "wendy@darling.com",
    text: "hello world",
    visibility: "public",
    likes: []
  }
  
  stickies.push(sticky)
  
  var sticky = {
    id: createStickyId(),
    user: "peter@pan.com",
    text: "hello world",
    visibility: "public",
    likes: ["wendy@darling.com"]
  }
  
  stickies.push(sticky)

  var sticky = {
    id: createStickyId(),
    user: 'peter@pan.com',
    text: 'hello world',
    visibility: 'public',
    likes: ["wendy@darling.com"]
}

stickies.push(sticky)