class Arroz {
    constructor() {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i]

            this[i] = element
        }

        this.length = arguments.length
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            callback(element)
        }
    }

    includes(searchElement) {
        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            if (element === searchElement) return true
        }

        return false
    }

    some(callback) {
        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            const result = callback(element)

            if (result) return true
        }

        return false
    }

    every(callback) {
        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            const result = callback(element)

            if (!result) return false
        }

        return true
    }

    slice(start, end) {
        const result = new Arroz

        for (let i = start; i < end; i++) {
            const element = this[i]

            result[result.length] = element
            result.length++
        }

        return result
    }

    reverse() {
        const limit = Math.floor(this.length / 2)

        for (let i = 0; i < limit; i++) {
            const element = this[i]
            const elementBack = this[this.length - 1 - i]

            this[i] = elementBack
            this[this.length - 1 - i] = element
        }

        return this
    }

    indexOf(searchElement) {
        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            if (element === searchElement) return i
        }

        return -1
    }

    map(callback) {
        const result = new Arroz

        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            const elementMapped = callback(element)

            result[i] = elementMapped
            result.length++
        }

        return result
    }

    filter(callback) {
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

    find() {
        // TODO
    }

    findIndex() {
        // TODO
    }

    push() {
        // TODO
    }

    pop() {
        // TODO
    }

    shift() {
        // TODO
    }

    unshift() {
        // TODO
    }

    lastIndexOf() {
        // TODO
    }

    concat() {
        // TODO
    }

    join() {
        // TODO
    }
}

module.exports = Arroz