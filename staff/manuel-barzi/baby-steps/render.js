// TODO implement me

// DEMO
// $ node render.js "[[1,0,1],[1,1,1],[1,0,1]]"
// ▮ ▮
// ▮▮▮
// ▮ ▮

// DEMO
// $ node render.js "[[1,0,1, 0, 1,1,1, 0, 1,0,0, 0, 1,1,1], [1,1,1, 0, 1,0,1, 0, 1,0,0, 0, 1,0,1], [1,0,1, 0, 1,1,1, 0, 1,1,1, 0, 1,1,1], [0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 1,0,1]]"
// ▮ ▮ ▮▮▮ ▮   ▮▮▮
// ▮▮▮ ▮ ▮ ▮   ▮ ▮
// ▮ ▮ ▮▮▮ ▮▮▮ ▮▮▮
//             ▮ ▮

const json = process.argv[2]
const matrix = JSON.parse(json)

let canvas = ''

for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]

    for (let j = 0; j < row.length; j++) {
        const point = row[j]

        //canvas = canvas + point? '▮' : ' '
        canvas += point? '▮' : ' '
    }

    canvas += '\n'
}

console.log(canvas)
