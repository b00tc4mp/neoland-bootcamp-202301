// ARRAY METHODS

// Transforma cada número multiplicando por 2
[1, 2, 3].map(n => n * 2)

//Filtra la comida que no sea carnívora
['🥝','🥦','🥩'].filter(n => n !== '🥩')

//Encuentra y devuelve la gallina
['🦖', '🦕', '🐓'].find(n => n === '🐓')

//Dime dónde está la gallina
['🦖', '🦕', '🐓'].findIndex(n => n === '🐓')

// ¡Rellena el array con dinero!
['', '', ''].fill('💶')

// ¿Todo está OK?
['✅', '❌', '✅', '✅'].every(n => n === '✅')

// ¿Hay algún error?
['✅', '❌', '✅', '✅'].some(n => n === '❌')