// const number1= process.argv[2]

// const number2= process.argv[3]

// const number3= Number( number1) +  Number (number2)

// console.log(number3)

const [, , a, b] = process.argv

console.log(Number(a) + Number(b))