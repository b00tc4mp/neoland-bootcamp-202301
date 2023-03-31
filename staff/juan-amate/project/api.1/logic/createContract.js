const { User, Contract, Place } = require('../data/models')
const {
  validateUserId,
  validateDate,
  validateDescription,
  validatePrice,
  validateEventDate,
  validateCeremonyPlaceAddress,
  validateCeremonyPlaceCity,
  validateCeremonyPlaceDescription,
  validateCeremonyPlaceProvince,
  validateCeremonyPlaceZipCode,
  validateSessionPlaceAddress,
  validateSessionPlaceDescription,
  validateSessionPlaceCity,
  validateSessionPlaceProvince,
  validateSessionPlaceZipCode,
  validateCelebrationPlaceAddress,
  validateCelebrationPlaceCity,
  validateCelebrationPlaceDescription,
  validateCelebrationPlaceProvince,
  validateCelebrationPlaceZipCode,
  validatePreparationPlaceAddress,
  validatePreparationPlaceCity,
  validatePreparationPlaceDescription,
  validatePreparationPlaceProvince,
  validatePreparationPlaceZipCode,
  validateCoupleName,
  validateCoupleId,
  validateCouplePhone,
  validateCoupleEmail,
  validateCouplePreparationPlaceAddress,
  validateCouplePreparationPlaceCity,
  validateCouplePreparationPlaceDescription,
  validateCouplePreparationPlaceProvince,
  validateCouplePreparationPlaceZipCode,
  ExistenceError,
} = require('com')
/**
 * 
 * @param {string} userId The id of the user
 * @param {Date} date Contract creation date
 * @param {string} description The contracted service description
 * @param {number} price Total price of the contracted service
 * @param {Date} eventDate Date and time of the event
 * @param {string} ceremonyPlaceDescription The description of the ceremony place of the event
 * @param {string} ceremonyPlaceAddres The address of the ceremony place of the event
 * @param {string} ceremonyPlaceZipCode The zip code of the ceremony place of the event
 * @param {string} ceremonyPlaceCity The city of the ceremony place of the event
 * @param {string} ceremonyPlaceProvince The province of the ceremony place of the event
 * @param {string} sessionPlaceDescription The description of the couple session place of the event
 * @param {string} sessionPlaceAddres The address of the couple session place of the event
 * @param {string} sessionPlaceZipCode The zip code of the couple session place of the event
 * @param {string} sessionPlaceCity The city of the couple session place of the event
 * @param {string} sessionPlaceProvince The province of the couple session place of the event
 * @param {string} celebrationPlaceDescription The description of the celebration place of the event
 * @param {string} celebrationPlaceAdress The address of the celebration place of the event
 * @param {string} celebrationPlaceZipCode The zip code of the celebration place of the event
 * @param {string} celebrationPlaceCity The city of the celebration place of the event
 * @param {string} celebrationPlaceProvince The province of the celebration place of the event
 * @param {string} preparationPlace The preparation place of the client
 * @param {string} coupleName The name of the client's couple
 * @param {string} coupleId The nationalId of the client's couple
 * @param {string} couplePhone The phone number of the client's couple
 * @param {string} coupleEmail The email address of the client's couple
 * @param {string} couplePreparationPlaceDescription The description of the couple preparation place
 * @param {string} couplePreparationPlaceAddres The address of the couple preparation place
 * @param {string} couplePreparationPlaceZipCode The zip code of the couple preparation place
 * @param {string} couplePreparationPlaceCity The city of the couple preparation place
 * @param {string} couplePreparationPlaceProvince The province of the couple preparation place
 * @returns 
 */
function createContract(
  userId,
  date,
  description,
  price,
  eventDate,
  ceremonyPlaceDescription,
  ceremonyPlaceAddress,
  ceremonyPlaceZipCode,
  ceremonyPlaceCity,
  ceremonyPlaceProvince,
  sessionPlaceDescription,
  sessionPlaceAddress,
  sessionPlaceZipCode,
  sessionPlaceCity,
  sessionPlaceProvince,
  celebrationPlaceDescription,
  celebrationPlaceAddress,
  celebrationPlaceZipCode,
  celebrationPlaceCity,
  celebrationPlaceProvince,
  preparationPlaceDescription,
  preparationPlaceAddress,
  preparationPlaceZipCode,
  preparationPlaceCity,
  preparationPlaceProvince,
  coupleName,
  coupleId,
  couplePhone,
  coupleEmail,
  couplePreparationPlaceDescription,
  couplePreparationPlaceAddress,
  couplePreparationPlaceZipCode,
  couplePreparationPlaceCity,
  couplePreparationPlaceProvince
) {
  validateUserId(userId)
  validateDate(date)
  validateDescription(description)
  validatePrice(price)
  validateEventDate(eventDate)
  validateCeremonyPlaceAddress(ceremonyPlaceAddress)
  validateCeremonyPlaceCity(celebrationPlaceCity)
  validateCeremonyPlaceDescription(ceremonyPlaceDescription)
  validateCeremonyPlaceProvince(ceremonyPlaceProvince)
  validateCeremonyPlaceZipCode(ceremonyPlaceZipCode)
  validateSessionPlaceAddress(sessionPlaceAddress)
  validateSessionPlaceDescription(sessionPlaceDescription)
  validateSessionPlaceCity(sessionPlaceCity)
  validateSessionPlaceProvince(sessionPlaceProvince)
  validateSessionPlaceZipCode(sessionPlaceZipCode)
  validateCelebrationPlaceAddress(celebrationPlaceAddress)
  validateCelebrationPlaceCity(celebrationPlaceCity)
  validateCelebrationPlaceDescription(celebrationPlaceDescription)
  validateCelebrationPlaceProvince(celebrationPlaceProvince)
  validateCelebrationPlaceZipCode(celebrationPlaceZipCode)
  validatePreparationPlaceAddress(preparationPlaceAddress)
  validatePreparationPlaceCity(preparationPlaceCity)
  validatePreparationPlaceDescription(preparationPlaceDescription)
  validatePreparationPlaceProvince(preparationPlaceProvince)
  validatePreparationPlaceZipCode(preparationPlaceZipCode)
  validateCoupleName(coupleName)
  validateCoupleId(coupleId)
  validateCouplePhone(couplePhone)
  validateCoupleEmail(coupleEmail)
  validateCouplePreparationPlaceAddress(couplePreparationPlaceAddress)
  validateCouplePreparationPlaceCity(couplePreparationPlaceCity)
  validateCouplePreparationPlaceDescription(couplePreparationPlaceDescription)
  validateCouplePreparationPlaceProvince(couplePreparationPlaceProvince)
  validateCouplePreparationPlaceZipCode(couplePreparationPlaceZipCode)

  return User.findById(userId)
    .then(user => {
      if (!user) throw new ExistenceError(`user with id ${userId} not found`)

      const preparationPlace = new Place({
        description: preparationPlaceDescription,
        address: preparationPlaceAddress,
        zipCode: preparationPlaceZipCode,
        city: preparationPlaceCity,
        province: preparationPlaceProvince
      })

      const ceremonyPlace = new Place({
        description: ceremonyPlaceDescription,
        address: ceremonyPlaceAddress,
        zipCode: ceremonyPlaceZipCode,
        city: ceremonyPlaceCity,
        province: ceremonyPlaceProvince
      })

      const sessionPlace = new Place({
        description: sessionPlaceDescription,
        address: sessionPlaceAddress,
        zipCode: sessionPlaceZipCode,
        city: sessionPlaceCity,
        province: sessionPlaceProvince
      })

      const couplePreparationPlace = new Place({
        description: couplePreparationPlaceDescription,
        address: couplePreparationPlaceAddress,
        zipCode: couplePreparationPlaceZipCode,
        city: couplePreparationPlaceCity,
        province: couplePreparationPlaceProvince
      })

      const celebrationPlace = new Place({
        description: celebrationPlaceDescription,
        address: celebrationPlaceAddress,
        zipCode: celebrationPlaceZipCode,
        city: celebrationPlaceCity,
        province: celebrationPlaceProvince
      })

      const contract = new Contract({
        user: userId,
        date,
        description,
        price,
        eventDate,
        ceremonyPlace,
        sessionPlace,
        celebrationPlace,
        preparationPlace,
        coupleName,
        coupleId,
        couplePhone,
        coupleEmail,
        couplePreparationPlace
      })

      return contract.save()
    })
}

module.exports = createContract
