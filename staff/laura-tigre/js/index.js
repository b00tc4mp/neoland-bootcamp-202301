function increaseTenPercent(number){
    return number*1.1
}

var products=[
    {name:"milk",price: 10},
    {name:"bread", price:5},
    {name: "bear", price:15},
    {name: "cheese", price:20}
];
for (i=0 ; i<products.length;i++){
    var product= products[i]
    product.price= increaseTenPercent(product.price)
}
console.log(products)