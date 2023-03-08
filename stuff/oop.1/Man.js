const Human = require('./Human')

function Man(name) {
    Human.call(this, name, 'male')
}

Man.prototype = Object.create(Human.prototype)
Man.prototype.constructor = Man

Man.prototype.giveSperm = function() {
    return '🤍'
}

module.exports = Man