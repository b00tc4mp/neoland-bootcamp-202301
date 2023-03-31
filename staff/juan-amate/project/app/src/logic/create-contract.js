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
    ClientError,
    ServerError,
    ExistenceError
} from 'com'
/**
 * Creates a new contract in the database.
 * 
 * @param {string} token The user token that is logged in
 * @param {date} date The date of creation of the contract
 * @param {date} eventDate The date of event of the contract
 * @param {string} ceremonyPlaceDescription The description of the ceremony place
 * @param {string} ceremonyPlaceAddress The address of the ceremony place
 * @param {string} ceremonyPlaceZipCode The zip code of the ceremony place
 * @param {string} ceremonyPlaceCity The city of the ceremony place
 * @param {string} ceremonyPlaceProvince The province of the ceremony place
 * @param {string} sessionPlaceDescription The description of the session place
 * @param {string} sessionPlaceAddress The address of the session place
 * @param {string} sessionPlaceZipCode The zip code of the session place
 * @param {string} sessionPlaceCity The city of the session place
 * @param {string} sessionPlaceProvince The province of the session place
 * @param {string} celebrationPlaceDescription The description of the celebration place
 * @param {string} celebrationPlaceAddress The address of the celebration place
 * @param {string} celebrationPlaceZipCode The zip code of the celebration place
 * @param {string} celebrationPlaceCity The city of the celebration place
 * @param {string} celebrationPlaceProvince The province of the celebration place
 * @param {string} preparationPlaceDescription The description of the preparation place
 * @param {string} preparationPlaceAddress The address of the preparation place
 * @param {string} preparationPlaceZipCode The zip code of the preparation place
 * @param {string} preparationPlaceCity The city of the preparation place
 * @param {string} preparationPlaceProvince The province of the preparation place
 * @param {string} coupleName The couple name of the user
 * @param {string} coupleId The couple id of the user
 * @param {string} couplePhone The couple phone of the user
 * @param {string} coupleEmail The couple email of the user
 * @param {string} couplePreparationPlaceDescription The description of the couple preparation place
 * @param {string} couplePreparationPlaceAddress The address of the couple preparation place
 * @param {string} couplePreparationPlaceZipCode The zip code of the couple preparation place
 * @param {string} couplePreparationPlaceCity The city of the couple preparation place
 * @param {string} couplePreparationPlaceProvince The province of the couple preparation place
 * @param {string} preWeddingServiceSelected The selected pre wedding service
 * @param {string} postWeddingServiceSelected The selected post wedding service
 * @param {string} expressDeliveryServiceSelected The selected express delivery service
 * @param {string} extraPhotographerServiceSelected The selected extra photographer service
 * @param {string} bookServiceSelected The selected book service
 * @param {string} albumServiceSelected The selected album service
 * @param {string} miniAlbumsServiceSelected The selected mini albums service
 * @param {string} woodBoxAlbumServiceSelected The selected wood box album service
 */
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
    woodBoxAlbumServiceSelected
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

    return fetch(`${process.env.REACT_APP_API_URL}/contracts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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
        })
    })
        .then(response => {
            const { status } = response

            if (status === 400) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ClientError(error)
                    })
            } else if (status === 404) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ExistenceError(error)
                    })
            } else if (status === 500) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ServerError(error)
                    })
            } else if (status === 201) {
                return
            }
        })
}

export default createContract