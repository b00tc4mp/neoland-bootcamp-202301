function Arroz() {
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i]

        this[i] = element
    }

    this.length = arguments.length
}

Arroz.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        callback(element)
    }
}

Arroz.prototype.includes = function(searchElement) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        if (element === searchElement) return true
    }

    return false
}

Arroz.prototype.some = function(callback) {
    // TODO
}

Arroz.prototype.every = function(callback) {
    // TODO
}

Arroz.prototype.slice = function(start, end) {
    // TODO
}

Arroz.prototype.reverse = function() {
    // TODO
}

Arroz.prototype.indexOf = function() {
    // TODO
}

Arroz.prototype.map = function() {
    // TODO
}

Arroz.prototype.filter = function() {
    // TODO
}

Arroz.prototype.find = function() {
    // TODO
}

Arroz.prototype.findIndex = function() {
    // TODO
}

module.exports = Arroz