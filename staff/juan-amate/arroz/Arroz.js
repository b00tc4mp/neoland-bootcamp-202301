
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

        const matches = callback(element)

        if (matches) return true
    }

    return false
}

Arroz.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const allMatches = callback(element)

        if (!allMatches) return false
    }

    return true
}

Arroz.prototype.slice = function (start, end) {
    const newArray = []

    if (start < 0) { start = this.length + start }
    if (end < 0) { end = this.length + end }
    if (end > this.length) { end = this.length }

    for (let i = start; i < (end || this.length); i++) {
        const element = this[i]

        newArray[newArray.length] = element
    }

    return newArray
}

Arroz.prototype.reverse = function () {
    const result = []

    const start = this.length - 1

    for (let i = start; i >= 0; i--) {
        result[result.length] = this[i]
    }

    return result
}

Arroz.prototype.indexOf = function (searchElement, fromIndex) {
    let start = 0

    if (fromIndex > 0) {
        start = fromIndex
    }

    for (let i = start; i < this.length; i++) {
        const element = this[i]

        if (element === searchElement) {
            return i
        }
    }
}

Arroz.prototype.map = function (callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        newArray[i] = callback(element)
    }

    return newArray
}

Arroz.prototype.filter = function (callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        if (callback(element)) {
            newArray[newArray.length] = element
        }
    }

    return newArray
}

Arroz.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        if (callback(element)) {
            return element
        }

    }
}

Arroz.prototype.findIndex = function () {
    // TODO
}

module.exports = Arroz