const Human = require('./Human')

class Woman extends Human {
    constructor(name) {
        super(name, 'female')
    }

    giveBirth() {
        return '👶'
    }
}

module.exports = Woman