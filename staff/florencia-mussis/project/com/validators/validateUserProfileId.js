function validateUserProfileId (userProfileId){
    if (typeof userProfileId !== 'string') throw new TypeError('userProfileId is not a string')
}

module.exports = validateUserProfileId