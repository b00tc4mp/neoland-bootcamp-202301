class ExistenceError extends Error {
    constructor(message) {
        super(message)

        this.name = ExistenceError.name
    }
}

module.exports = ExistenceError