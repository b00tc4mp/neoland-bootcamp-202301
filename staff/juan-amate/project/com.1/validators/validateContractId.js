function validateContractId(contractId) {
    if (typeof contractId !== 'string') throw new TypeError('contractId is not a string')
}

module.exports = validateContractId