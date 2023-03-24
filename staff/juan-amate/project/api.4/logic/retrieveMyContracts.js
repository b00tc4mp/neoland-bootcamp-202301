const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, ExistenceError } = require('com')
const { User, Contract } = require('../data/models')

/**
 * Retrieves the contracts that belong to the specificed user (email)
 * 
 * @param {string} userId The userId of the user to retrieve the contracts
 */
function retrieveMyContracts(userId) {
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Contract.find({ user: new ObjectId(userId) }).populate({ path: 'user', select: 'name' }).lean()
    ])
        .then(([user, contracts]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            contracts.forEach(contract => {

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
            })

            return contracts
        })
}

module.exports = retrieveMyContracts