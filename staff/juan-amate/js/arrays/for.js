// Para precio hasta 10 incrementar 10%
// Para precio superior a 10 incrementar 20%

/*
function increaseTenPercent(number) {
    var result = number * 1.1;
    return result;
}
*/


var products = [
    { name: 'milk', price: 10 },
    { name: 'bread', price: 5 },
    { name: 'beer', price: 15 },
    { name: 'cheese', price: 20 },
];

for (var i = 0; i < products.length; i++) {
    var product = products[i];

    if (product.price <= 10) {
        product.price = product.price * 1.1; 
    } else {
        product.price = product.price * 1.2;
    }

    // var newPrice = increaseTenPercent(product.price);

    // product.price = product.price * 1.1;

    // product.price = newPrice;
}
console.log(products);