import {
    validateToken,
    validateDate,
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
    validatePreWeddingServiceSelected,
    validatePostWeddingServiceSelected,
    validateExpressDeliveryServiceSelected,
    validateExtraPhotographerServiceSelected,
    validateBookServiceSelected,
    validateAlbumServiceSelected,
    validateMiniAlbumsServiceSelected,
    validateWoodBoxAlbumServiceSelected,
    validateCallback,
    ClientError,
    ServerError,
    ExistenceError
} from 'com'

function createContract(
    token,
    date,
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
    preWeddingServiceSelected,
    postWeddingServiceSelected,
    expressDeliveryServiceSelected,
    extraPhotographerServiceSelected,
    bookServiceSelected,
    albumServiceSelected,
    miniAlbumsServiceSelected,
    woodBoxAlbumServiceSelected,
    callback
) {
    validateToken(token)
    validateDate(date)
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
    validatePreWeddingServiceSelected(preWeddingServiceSelected)
    validatePostWeddingServiceSelected(postWeddingServiceSelected)
    validateExpressDeliveryServiceSelected(expressDeliveryServiceSelected)
    validateExtraPhotographerServiceSelected(extraPhotographerServiceSelected)
    validateBookServiceSelected(bookServiceSelected)
    validateAlbumServiceSelected(albumServiceSelected)
    validateMiniAlbumsServiceSelected(miniAlbumsServiceSelected)
    validateWoodBoxAlbumServiceSelected(woodBoxAlbumServiceSelected)
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

    xhr.open('POST', 'http://localhost:8080/contracts')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = {
        date,
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
        preWeddingServiceSelected,
        postWeddingServiceSelected,
        expressDeliveryServiceSelected,
        extraPhotographerServiceSelected,
        bookServiceSelected,
        albumServiceSelected,
        miniAlbumsServiceSelected,
        woodBoxAlbumServiceSelected

    }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default createContract