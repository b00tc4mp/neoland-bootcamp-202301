const Human = require('./Human')

class Man extends Human {
    constructor(name) {
        super(name, 'male')
    }

    giveSperm() {
        return '🤍'
    }
}

module.exports = Man