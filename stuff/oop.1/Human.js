function Human(name, gender) {
    this.name = name
    this.gender = gender
}

Human.prototype.eat = function() {
    return '🍝'
}

Human.prototype.drink = function() {
    return '🍶'
}

Human.prototype.poo = function() {
    return '💩'
}

Human.prototype.pee = function() {
    return '💦'
}

module.exports = Human