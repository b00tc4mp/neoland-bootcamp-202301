var peter = { name: 'Peter', parents: [
    { name: 'Florencia', parents: [
            { name: 'Olga' },
            { name: 'Domingo' }
        ]
    },
    { name: 'John', parents: [
            { name: 'Jennifer' },
            { name: 'Kevin' }
        ] 
    }
]
}

var { name } = peter

console.log(name)

var { parents: [{ name: mom }, { name: dad }] } = peter

console.log(mom, dad)

var { parents: [{ parents: [{ name: momMom }, { name: momDad }] }, { parents: [{ name: dadMom }, { name: dadDad }] }] } = peter

console.log(momMom, momDad, dadMom, dadDad)


// VM35316:17 Peter
// VM35316:21 Florencia John
// VM35316:25 Olga Domingo Jennifer Kevin