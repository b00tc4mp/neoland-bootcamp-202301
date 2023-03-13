const isEmail = require('./checkers/isEmail')
const validateEmail = require('./validators/validateEmail')
const validatePassword = require('./validators/validatePassword')
const validateName = require('./validators/validateName')
const validateAge = require('./validators/validateAge')
const validateCallback = require('./validators/validateCallback')
const validateUserId = require('./validators/validateUserId')
const validateText = require('./validators/validateText')
const validateVisibility = require('./validators/validateVisibility')
const validateNewEmail = require('./validators/validateNewEmail')
const validateNewPassword = require('./validators/validateNewPassword')
const validateNewPasswordConfirm = require('./validators/validateNewPasswordConfirm')
const validateToken = require('./validators/validateToken')
const validateTitle = require('./validators/validateTitle')
const validateListId = require('./validators/validateListId')

const FormatError = require('./errors/FormatError')
const ExistenceError = require('./errors/ExistenceError')
const AuthError = require('./errors/AuthError')
const CoherenceError = require('./errors/CoherenceError')
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
    validateNewEmail,
    validateNewPassword,
    validateNewPasswordConfirm,
    validateToken,
    validateTitle,
    validateListId,

    FormatError,
    ExistenceError,
    AuthError,
    CoherenceError,
    ValueError,
    ClientError,
    ServerError
}