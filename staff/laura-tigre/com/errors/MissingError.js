class MissingError extends Error {
    constructor(message) {
        super(message);
    }
}
module.exports = MissingError;