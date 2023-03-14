import {
    validateToken,
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
    validateCallback,
    ClientError,
    ServerError,
    ExistenceError
} from 'com'

function createContract(
    token,
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
    couplePreparationPlaceProvince,
    callback
) {
    validateToken(token)
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
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 201) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('POST', 'http://localhost:8080/constracts')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'aplication/json')

    const payload = {
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
    }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default createContract