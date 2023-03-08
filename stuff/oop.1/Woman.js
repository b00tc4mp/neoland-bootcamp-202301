const Human = require('./Human')

function Woman(name) {
    Human.call(this, name, 'female')
}

Woman.prototype = Object.create(Human.prototype)
Woman.prototype.constructor = Woman

Woman.prototype.giveBirth = function() {
    return '👶'
}

module.exports = Woman