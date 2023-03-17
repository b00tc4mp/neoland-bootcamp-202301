const isEmail = require('./checkers/isEmail')
const validateEmail = require('./validators/validateEmail')
const validatePassword = require('./validators/validatePassword')
const validateName = require('./validators/validateName')
const validateAge = require('./validators/validateAge')
const validateCallback = require('./validators/validateCallback')
const validateUserId = require('./validators/validateUserId')
const validateText = require('./validators/validateText')
const validateNewEmail = require('./validators/validateNewEmail')
const validateNewPassword = require('./validators/validateNewPassword')
const validateNewPasswordConfirm = require('./validators/validateNewPasswordConfirm')
const validateToken = require('./validators/validateToken')
const validateTitle = require('./validators/validateTitle')
const validateListId = require('./validators/validateListId')
const validateArchived = require('./validators/validateArchived')
const validateChecked = require('./validators/validateChecked')
const validateItemId = require('./validators/validateItemId')
const validateShared = require('./validators/validateShared')

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
    validateNewEmail,
    validateNewPassword,
    validateNewPasswordConfirm,
    validateToken,
    validateTitle,
    validateListId,
    validateArchived,
    validateChecked,
    validateItemId,
    validateShared,

    FormatError,
    ExistenceError,
    AuthError,
    CoherenceError,
    ValueError,
    ClientError,
    ServerError
}