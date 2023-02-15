// TODO implement me

// DEMO
// $ node render.js "[[1,0,1],[1,1,1],[1,0,1]]"
// ▮ ▮
// ▮▮▮
// ▮ ▮

const a = process.argv[2]
const b = JSON.parse(a)
let result = ''

for (let index = 0; index < b.length; index++) {
    const element = b[index];

    for (let index2 = 0; index2 <element.length; index2++) {
        const element2 = element[index2]
        
        if (element2 === 1) {result = result + '▮'}
        else {result = result + ' '}

    }
    result = result + '\n'
}
console.log(result)
