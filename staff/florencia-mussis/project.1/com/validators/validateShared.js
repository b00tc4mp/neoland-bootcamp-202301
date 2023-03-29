function validateShared(shared) {
    if (typeof shared !== "boolean" ) throw new TypeError('Shared is not a boolean')
}

module.exports = validateShared