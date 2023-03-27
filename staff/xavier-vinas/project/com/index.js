const isEmail = require('./checkers/isEmail')

const validateEmail = require('./validators/validateEmail')
const validatePassword = require('./validators/validatePassword')
const validateName = require('./validators/validateName')
const validateAge = require('./validators/validateAge')
const validateCallback = require('./validators/validateCallback')
const validateUserId = require('./validators/validateUserId')
const validateText = require('./validators/validateText')
const validateVisibility = require('./validators/validateVisibility')
const validateStickyId = require('./validators/validateStickyId')
const validateNewEmail = require('./validators/validateNewEmail')
const validateNewPassword = require('./validators/validateNewPassword')
const validateNewPasswordConfirm = require('./validators/validateNewPasswordConfirm')
const validateColor = require('./validators/validateColor')
const validateToken = require('./validators/validateToken')
const validateUserProfileId = require('./validators/validateUserProfileId')
const validateAuctionId = require('./validators/validateAuctionId')
const validateAmount = require('./validators/validateAmount')

const FormatError = require('./errors/FormatError')
const ExistenceError = require('./errors/ExistenceError')
const AuthError = require('./errors/AuthError')
const CoherenceError = require('./errors/AuthError')
const ValueError = require('./errors/ValueError')
const ClientError = require('./errors/ClientError')
const ServerError = require('./errors/ServerError')

module.exports = {
    isEmail,

    validateEmail,
    validatePassword,
    validateName,
    validateAge,
    validateCallback,
    validateUserId,
    validateText,
    validateVisibility,
    validateStickyId,
    validateNewEmail,
    validateNewPassword,
    validateNewPasswordConfirm,
    validateColor,
    validateToken,
    validateUserProfileId,
    validateAuctionId,
    validateAmount,


    FormatError,
    ExistenceError,
    AuthError,
    CoherenceError,
    ValueError,
    ClientError,
    ServerError

}