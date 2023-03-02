
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

    if (start < 0) { start = this.length + start }
    if (end < 0) { end = this.length + end }
    if (end > this.length) { end = this.length }

    for (let i = start; i < (end || this.length); i++) {
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
        const elementBack = this[this.length - i - 1]

        this[i] = elementBack
        this[this.length - 1 - i] = element
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

        if (element === searchElement) return i
    }
}

Arroz.prototype.map = function (callback) {
    const result = new Arroz

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const elemmentMapped = callback(element)

        this[i] = callback(element)
    }

    return result
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

Arroz.prototype.findIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        if (callback(element)) {
            return i
        }

    }
}

module.exports = Arroz