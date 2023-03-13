// TO DO implement me

// DEMO
// $ node render.js "[[1,0,1],[1,1,1],[1,0,1]]"
// ▮ ▮
// ▮▮▮
// ▮ ▮

const a = process.argv[2]
const b = JSON.parse(a)
let result = ""

for (let i = 0; i < b.length; i++) { //recorre los 3 elementos
    const element = b [i];

    for (let j = 0; j < element.length; j++) { //recorre cada elemento por dentro
        const element2 = element [j]

        if (element2 === 1) {result = result + "▮"}
        else {result = result + " "}
    }
    result = result + "\n" //salto de linea
}
console.log(result)