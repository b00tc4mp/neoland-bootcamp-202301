var whiskysAndBourbon = [
  "jack daniels",
  "jonny walker",
  "j & b",
  "mackallan",
  "ballantines",
];

for (var i = 0; i < whiskysAndBourbon.length; i++) {
  console.log("😀 " + whiskysAndBourbon[i]);
}

console.log("😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵");

function increaseTenPercent(number) {
  //   return number * 1.1

  var result = number * 1.1;

  return result;
}

var products = [
  { name: "milk", price: 10 },
  { name: "bread", price: 5 },
  { name: "beer", price: 15 },
  { name: "cheese", price: 20 },
];

for (var i = 0; i < products.length; i++) {
  var product = products[i];

  //   product.price = product.price * 1.1;

  var newPrice = increaseTenPercent(product.price);

  product.price = newPrice;

  //   console.log(product)
}

console.log(products);
