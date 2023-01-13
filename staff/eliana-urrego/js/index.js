var products = [
    { name:"milk", price:10 },
    { name:"bread", price:5 },
    { name:"beer", price:15 },
    { name:"cheese", price:20 },
];

for (var i = 0; i<products.length;i++) {
    var product = products[i];

    //product.price=product.price*1.1;

var newPrice = increaseTenPercent(product.price);
products.price = newPrice
// console.log(product)

}

console.log(product);

function increaseTenPercent(num){ 
    var result = (num)*1.1;
    return result;
}

for (var i =0; i<prodcuts.length;i++)







