const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, validateContractId, ExistenceError } = require('com')
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

    return Promise.all([User.findById(userId).lean(), Contract.findById(contractId).lean()])
        .then(([user, contract]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!contract) throw new ExistenceError(`contract with id ${contractId} not found`)

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

            if (contract.user) {
                contract.user = contract.user.toString()

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