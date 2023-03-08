class Human {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }

    eat() {
        return '🍝'
    }

    drink() {
        return '🍶'
    }

    poo() {
        return '💩'
    }

    pee() {
        return '💦'
    }
}

module.exports = Human