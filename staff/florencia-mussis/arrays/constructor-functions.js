function Person(name, surname) {
    this.name = name
    this.surname = surname
}


var laura = new Person('Laura', 'Tigre')
// undefined
laura
// Person {name: 'Laura', surname: 'Tigre'}name: "Laura"surname: "Tigre"[[Prototype]]: Object
var xavi = new Person('Xavi', 'Viñas')
// undefined
xavi
// Person {name: 'Xavi', surname: 'Viñas'}name: "Xavi"surname: "Viñas"[[Prototype]]: Object
var laura = {
    name: 'Laura',
    surname: 'Tigre'
}
// undefined
laura
// {name: 'Laura', surname: 'Tigre'}name: "Laura"surname: "Tigre"[[Prototype]]: Object
var laura = {
    nam: 'Laura',
    surname: 'Tigre'
}
// undefined
laura
// {nam: 'Laura', surname: 'Tigre'}
var laura = new Person('Laura', 'Tigre')
// undefined
laura
// Person {name: 'Laura', surname: 'Tigre'}name: "Laura"surname: "Tigre"[[Prototype]]: Object