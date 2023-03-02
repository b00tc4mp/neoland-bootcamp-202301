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

        var matches = callback(element)

        if (matches) return true
    }

    return false

}

Arroz.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const elements = this[i]
        var matchesAllElements = callback(elements)
        if (!matchesAllElements) return false

    }
    return true
}

Arroz.prototype.slice = function (start, end) {
    //const newArray = []
    const result= new Arroz
    if (start < 0) {
        start = this.length + start
    }
    if (end < 0) { end = this.length + end }
    if (end > this.length) { end = this.length }

    for (let i = start; i < (end || this.length); i++) {
        const element = this[i]

        result[result.length] = element
        // newArray.push(element)
        result.length++
    }

    return result

}

Arroz.prototype.reverse = function () {
    const result= new Arroz
    const start = this.length - 1

    for (let i = start; i >= 0; i--) {
        result[result.length] = this[i]
    }
    return result
}

Arroz.prototype.indexOf = function (searchElement) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i;
        }
    }
    return -1;

}

Arroz.prototype.map = function (callback) {
    result = new Arroz
    for (let i = 0; i < this.length; i++) {
        const element = this[i]
        result[i] = callback(element)
    }
    return result
}

Arroz.prototype.filter = function (callback) {
    result= new Arroz
    for(let i=0; i<this.length; i++ ){
        const element= this[i]
        const matches= callback(element)
        if (matches){
            result[result.length]= elementMapped
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
Arroz.prototype.push= function(){

}
Arroz.prototype.pop= function(){

}
Arroz.prototype.shift= function(){

}
Arroz.prototype.unshift= function(){

}
Arroz.prototype.lastIndexOf= function(){

}
Arroz.prototype.concat= function(){

}
Arroz.prototype.join= function(){

}


module.exports = Arroz