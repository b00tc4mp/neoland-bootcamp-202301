// TODO implement me

// DEMO
// $ node render.js "[[1,0,1],[1,1,1],[1,0,1]]"
// ▮ ▮
// ▮▮▮
// ▮ ▮

const a = process.argv[2]
const b = JSON.parse(a)

let result = ''

for (let i = 0; i < b.length; i++) {
    const element = b[i]
    for (let j = 0; j < element.length; j++) {
        const element2 = element[j]
        // if (element2 === 1) {
        //     result = result + '▮'
        // } else {
        //     result = result + ' '
        // }
        result += element2?'▮': ' '
    }
    result = result + '\n'
}
console.log(result)