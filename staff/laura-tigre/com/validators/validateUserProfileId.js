function validateUserProfileId(userProfileId){
    if (typeof userProfileId !== 'string') throw new TypeError('userId is not a string')
}
module.exports= validateUserProfileId