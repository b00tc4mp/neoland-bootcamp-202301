





var a = function() {
    console.log("a")
    return true 
}

var b = function(){
    console.log ("b")
    return false 
}

if (a() && b ()){
    console.log("hello")
}else{
    console.log("bye")
}

// bye , porque && si algo da false es false 


var a = function() {
    console.log("a")
    return false 
}

var b = function(){
    console.log ("b")
    return true 
}

if (a() && b ()){
    console.log("hello")
}else{
    console.log("bye")
}

// false , bye 


var a = function() {
    console.log("a")
    return false 
}

var b = function(){
    console.log ("b")
    return false 
}

if (a() && b ()){
    console.log("hello")
}else{
    console.log("bye")
}


// bye , false 


var a = function() {
    console.log("a")
    return true 
}

var b = function(){
    console.log ("b")
    return true 
}

if (a() && b ()){
    console.log("hello")
}else{
    console.log("bye")
}

// hello , true : true y true => true 