import {
    validateToken,
    validateName,
    validateNationalId,
    validateAddress,
    validateZipCode,
    validateCity,
    validateProvince,
    validatePhone,
    ClientError,
    ServerError,
    AuthError,
    ExistenceError
} from 'com'

/**
 * Update the user data
 * 
 * @param {string} token The session token
 * @param {string} name The user name
 * @param {string} nationalId The user national id
 * @param {string} address The user address
 * @param {string} zipCode The user zip code
 * @param {string} city The user city
 * @param {string} province The user province
 * @param {string} phone The user phone
 */
function updateUserData(token, name, nationalId, address, zipCode, city, province, phone) {
    validateToken(token)
    validateName(name)
    validateNationalId(nationalId)
    validateAddress(address)
    validateZipCode(zipCode)
    validateCity(city)
    validateProvince(province)
    validatePhone(phone)

    return fetch(`${process.env.REACT_APP_API_URL}/users/data`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, nationalId, address, zipCode, city, province, phone })
    })
        .then(response => {
            const { status } = response

            if (status === 400) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ClientError(error)
                    })
            } else if (status === 401) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new AuthError(error)
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
            } else if (status === 204) {

                return
            }
        })
}

export default updateUserData