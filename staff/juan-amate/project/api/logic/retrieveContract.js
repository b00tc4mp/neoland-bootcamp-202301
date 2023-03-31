const { validateUserId, validateContractId, ExistenceError, CoherenceError } = require('com')
const { User, Contract } = require('../data/models')

/**
 * Retrieves the contract that belong to the specificed contract id.
 * 
 * @param {string} userId The userId 
 * @param {string} contractId The contractId identifier
 */
function retrieveContract(userId, contractId) {
    validateUserId(userId)
    validateContractId(contractId)

    return Promise.all([
        User.findById(userId).lean(),
        Contract.findById(contractId).populate('user photographer').lean()
    ])
        .then(([user, contract]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!contract) throw new ExistenceError(`contract with id ${contractId} not found`)

            if (contract.user._id.toString() !== userId && contract.photographer._id.toString() !== userId) throw new CoherenceError(`user with id ${userId} does not own contract with id ${contractId} or is not the photographer`)

            contract.services.forEach(service => {
                if (service._id) {
                    service.id = service._id.toString()
                    delete service._id

                    delete service.__v
                }
            })

            if (contract._id) {
                contract.id = contract._id.toString()
                delete contract._id

                delete contract.__v
            }

            if (contract.user._id) {
                contract.user.id = contract.user._id.toString()
                delete contract.user._id

                delete contract.user.__v
                delete contract.user.password
            }

            if (contract.photographer._id) {
                contract.photographer.id = contract.photographer._id.toString()
                delete contract.photographer._id

                delete contract.photographer.__v
                delete contract.photographer.password
            }

            if (contract.ceremonyPlace._id) {
                contract.ceremonyPlace.id = contract.ceremonyPlace._id.toString()

                delete contract.ceremonyPlace._id
            }

            if (contract.sessionPlace._id) {
                contract.sessionPlace.id = contract.sessionPlace._id.toString()

                delete contract.sessionPlace._id
            }

            if (contract.celebrationPlace._id) {
                contract.celebrationPlace.id = contract.celebrationPlace._id.toString()

                delete contract.celebrationPlace._id
            }

            if (contract.preparationPlace._id) {
                contract.preparationPlace.id = contract.preparationPlace._id.toString()

                delete contract.preparationPlace._id
            }

            if (contract.couplePreparationPlace._id) {
                contract.couplePreparationPlace.id = contract.couplePreparationPlace._id.toString()

                delete contract.couplePreparationPlace._id
            }

            return contract
        })
}

module.exports = retrieveContract