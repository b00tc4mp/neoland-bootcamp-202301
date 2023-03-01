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
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const matches = callback(element)
        
        if (matches) return true
    }
    return false
}

Arroz.prototype.every = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const allMatches = callback(element)

        if (!allMatches) return false
    }    
    return true
}

Arroz.prototype.slice = function(start, end) {
    const newArray = []

    if (start < 0){ start = this.length + start}
    if (end < 0){ end = this.length + end}
    if (end > this.length){ end = this.length}
    
    for (let i = start ; i < (end || this.length)  ; i++) {
        const element = this[i]

        newArray[newArray.length] = element
    }    

    return newArray
}

Arroz.prototype.reverse = function() {
    const result = []

    const start = this.length - 1

    for(let i = start; i >= 0; i--){
        result[result.length] = this[i]
    }

    return result
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