//for
var products = [
    { name: "milk", price: 10 },
    { name: "bread", price: 5 },
    { name: "beer", price: 15 },
    { name: "cheese", price: 20 },
];

for (var i = 0; i < products.length; i++){
    var product = products[i];
    product.price = product.price * 1.1
}

console.log (products)

//functions

var a = 3
var b = 4
var c = (a + b)*1000

function doTheMath (a,b){
    var result = (a + b)*1000;
    return result;
}

var c = doTheMath (a,b);
console.log(c)

//function-for

var products = [
    { name: "milk", price: 10 },
    { name: "bread", price: 5 },
    { name: "beer", price: 15 },
    { name: "cheese", price: 20 },
];

function increaseTenPercent (number) {
    var result = number * 1.1;
    return result;
}

for (var i = 0; i < products.length; i++){
    var product = products[i];
    var newPrice = increaseTenPercent(product.price)
    product.price = newPrice 
}

console.log(products)


