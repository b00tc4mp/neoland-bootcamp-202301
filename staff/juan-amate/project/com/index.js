const isEmail = require('./checkers/isEmail')

const validateName = require('./validators/validateName')
const validateNationalId = require('./validators/validateNationalId')
const validateRole = require('./validators/validateRole')
const validateAddress = require('./validators/validateAddress')
const validateZipCode = require('./validators/validateZipCode')
const validateCity = require('./validators/validateCity')
const validateProvince = require('./validators/validateProvince')
const validatePhone = require('./validators/validatePhone')
const validatePhotographer = require('./validators/validatePhotographer')
const validateEmail = require('./validators/validateEmail')
const validatePassword = require('./validators/validatePassword')

const validateUserId = require('./validators/validateUserId')
const validateDate = require('./validators/validateDate')
const validateDescription = require('./validators/validateDescription')
const validatePrice = require('./validators/validatePrice')
const validateEventDate = require('./validators/validateEventDate')

const validateCeremonyPlaceDescription = require('./validators/validateCeremonyPlaceDescription')
const validateCeremonyPlaceAddress = require('./validators/validateCeremonyPlaceAddress')
const validateCeremonyPlaceZipCode = require('./validators/validateCeremonyPlaceZipCode')
const validateCeremonyPlaceCity = require('./validators/validateCeremonyPlaceCity')
const validateCeremonyPlaceProvince = require('./validators/validateCeremonyPlaceProvince')

const validateSessionPlaceDescription = require('./validators/validateSessionPlaceDescription')
const validateSessionPlaceAddress = require('./validators/validateSessionPlaceAddress')
const validateSessionPlaceZipCode = require('./validators/validateSessionPlaceZipCode')
const validateSessionPlaceCity = require('./validators/validateSessionPlaceCity')
const validateSessionPlaceProvince = require('./validators/validateSessionPlaceProvince')

const validateCelebrationPlaceDescription = require('./validators/validateCelebrationPlaceDescription')
const validateCelebrationPlaceAddress = require('./validators/validateCelebrationPlaceAddress')
const validateCelebrationPlaceZipCode = require('./validators/validateCelebrationPlaceZipCode')
const validateCelebrationPlaceCity = require('./validators/validateCelebrationPlaceCity')
const validateCelebrationPlaceProvince = require('./validators/validateCelebrationPlaceProvince')

const validatePreparationPlaceDescription = require('./validators/validatePreparationPlaceDescription')
const validatePreparationPlaceAddress = require('./validators/validatePreparationPlaceAddress')
const validatePreparationPlaceZipCode = require('./validators/validatePreparationPlaceZipCode')
const validatePreparationPlaceCity = require('./validators/validatePreparationPlaceCity')
const validatePreparationPlaceProvince = require('./validators/validatePreparationPlaceProvince')

const validateCoupleName = require('./validators/validateCoupleName')
const validateCoupleId = require('./validators/validateCoupleId')
const validateCouplePhone = require('./validators/validateCouplePhone')
const validateCoupleEmail = require('./validators/validateCoupleEmail')

const validateCouplePreparationPlaceDescription = require('./validators/validateCouplePreparationPlaceDescription')
const validateCouplePreparationPlaceAddress = require('./validators/validateCouplePreparationPlaceAddress')
const validateCouplePreparationPlaceZipCode = require('./validators/validateCouplePreparationPlaceZipCode')
const validateCouplePreparationPlaceCity = require('./validators/validateCouplePreparationPlaceCity')
const validateCouplePreparationPlaceProvince = require('./validators/validateCouplePreparationPlaceProvince')

const validatePreWeddingServiceSelected = require('./validators/validatePreWeddingServiceSelected')
const validatePostWeddingServiceSelected = require('./validators/validatePostWeddingServiceSelected')
const validateExpressDeliveryServiceSelected = require('./validators/validateExpressDeliveryServiceSelected')
const validateExtraPhotographerServiceSelected = require('./validators/validateExtraPhotographerServiceSelected')
const validateBookServiceSelected = require('./validators/validateBookServiceSelected')
const validateAlbumServiceSelected = require('./validators/validateAlbumServiceSelected')
const validateMiniAlbumsServiceSelected = require('./validators/validateMiniAlbumsServiceSelected')
const validateWoodBoxAlbumServiceSelected = require('./validators/validateWoodBoxAlbumServiceSelected')

const validateSigned = require('./validators/validateSigned')
const validateCallback = require('./validators/validateCallback')
const validateToken = require('./validators/validateToken')
const validateContractId = require('./validators/validateContractId')
const validateNewEmail = require('./validators/validateNewEmail')
const validateNewPassword = require('./validators/validateNewPassword')
const validateNewPasswordRepeat = require('./validators/validateNewPasswordRepeat')
const validateText = require('./validators/validateText')
const validateVisibility = require('./validators/validateVisibility')

const FormatError = require('./errors/FormatError')
const ExistenceError = require('./errors/ExistenceError')
const AuthError = require('./errors/AuthError')
const CoherenceError = require('./errors/CoherenceError')
const ValueError = require('./errors/ValueError')
const ClientError = require('./errors/ClientError')
const ServerError = require('./errors/ServerError')

module.exports = {
    isEmail,

    validateName,
    validateNationalId,
    validateRole,
    validateAddress,
    validateZipCode,
    validateCity,
    validateProvince,
    validatePhone,
    validatePhotographer,
    validateEmail,
    validatePassword,
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
    validatePreWeddingServiceSelected,
    validatePostWeddingServiceSelected,
    validateExpressDeliveryServiceSelected,
    validateExtraPhotographerServiceSelected,
    validateBookServiceSelected,
    validateAlbumServiceSelected,
    validateMiniAlbumsServiceSelected,
    validateWoodBoxAlbumServiceSelected,
    validateSigned,
    validateCallback,
    validateText,
    validateVisibility,
    validateContractId,
    validateNewEmail,
    validateNewPassword,
    validateNewPasswordRepeat,
    validateToken,

    FormatError,
    ExistenceError,
    AuthError,
    CoherenceError,
    ValueError,
    ClientError,
    ServerError
}