class ClienteError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = ClienteError