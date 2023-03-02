function Arroz() {
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i]

        this[i] = element
    }

    this.length = arguments.length
}

Arroz.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        callback(element)
    }
}

Arroz.prototype.includes = function (searchElement) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        if (element === searchElement) return true
    }

    return false
}

Arroz.prototype.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const result = callback(element)

        if (result) return true
    }

    return false
}

Arroz.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const result = callback(element)

        if (!result) return false
    }

    return true
}

Arroz.prototype.slice = function (start, end) {
    const result = new Arroz

    for (let i = start; i < end; i++) {
        const element = this[i]

        result[result.length] = element
        result.length++
    }

    return result
}

Arroz.prototype.reverse = function () {
    const limit = Math.floor(this.length / 2)

    for (let i = 0; i < limit; i++) {
        const element = this[i]
        const elementBack = this[this.length - 1 - i]

        this[i] = elementBack
        this[this.length - 1 - i] = element
    }

    return this
}

Arroz.prototype.indexOf = function (searchElement) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        if (element === searchElement) return i
    }

    return -1
}

Arroz.prototype.map = function (callback) {
    const result = new Arroz

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const elementMapped = callback(element)

        result[i] = elementMapped
        result.length++
    }

    return result
}

Arroz.prototype.filter = function (callback) {
    const result = new Arroz

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const matches = callback(element)

        if (matches) {
            result[result.length] = element
            result.length++
        }
    }

    return result
}

Arroz.prototype.find = function () {
    // TODO
}

Arroz.prototype.findIndex = function () {
    // TODO
}

Arroz.prototype.push = function() {
    // TODO
}

Arroz.prototype.pop = function() {
    // TODO
}

Arroz.prototype.shift = function() {
    // TODO
}

Arroz.prototype.unshift = function() {
    // TODO
}

Arroz.prototype.lastIndexOf = function() {
    // TODO
}

Arroz.prototype.concat = function() {
    // TODO
}

Arroz.prototype.join = function() {
    // TODO
}

module.exports = Arroz