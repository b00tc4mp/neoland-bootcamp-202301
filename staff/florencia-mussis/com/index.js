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

const FormatError = require('./errors/FormatError')
const MissingError = require('./errors/MissingError')
const AuthError = require('./errors/AuthError')
const ConflictError = require('./errors/AuthError')

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

    FormatError,
    MissingError,
    AuthError,
    ConflictError
}