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



module.exports = Arroz