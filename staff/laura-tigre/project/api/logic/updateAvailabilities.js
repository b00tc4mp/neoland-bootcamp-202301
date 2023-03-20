const { User, Nanny } = require('../data/models')
const { validateUserId, validateUserProfileId,validateNewMondayMorningSelected,
    validateNewMondayAfternoonSelected,
    validateNewMondayEveningSelected,
    validateNewTuesdayMorningSelected,
    validateNewTuesdayAfternoonSelected,
    validateNewTuesdayEveningSelected,
    validateNewWendsdayMorningSelected,
    validateNewWendsdayAfternoonSelected,
    validateNewWendsdayEveningSelected,
    validateNewThursdayMorningSelected,
    validateNewThursdayAfternoonSelected,
    validateNewThursdayEveningSelected,
    validateNewFridayMorningSelected,
    validateNewFridayAfternoonSelected,
    validateNewFridayEveningSelected,
    validateNewSaturdayMorningSelected,
    validateNewSaturdayAfternoonSelected,
    validateNewSaturdayEveningSelected,
    validateNewSundayMorningSelected,
    validateNewSundayAfternoonSelected,
    validateNewSundayEveningSelected,
    ExistenceError
} = require('com')

function updateAvailabilities(userId,nannyId, mondayNewMorningSelected, mondayNewAfternoonSelected, mondayNewEveningSelected, tuesdayNewMorningSelected, tuesdayNewAfternoonSelected, tuesdayNewEveningSelected, wendsdayNewMorningSelected, wendsdayNewAfternoonSelected, wendsdayNewEveningSelected, thursdayNewMorningSelected, thursdayNewAfternoonSelected, thursdayNewEveningSelected, fridayNewMorningSelected, fridayNewAfternoonSelected, fridayNewEveningSelected, saturdayNewMorningSelected, saturdayNewAfternoonSelected, saturdayNewEveningSelected, sundayNewMorningSelected, sundayNewAfternoonSelected, sundayNewEveningSelected,) {
    validateUserId(userId)
    validateUserProfileId(nannyId)
    if (mondayNewMorningSelected !== undefined) 
    validateNewMondayMorningSelected(mondayNewMorningSelected)
    if (mondayNewAfternoonSelected !== undefined) validateNewMondayAfternoonSelected(mondayNewAfternoonSelected)
    if (mondayNewEveningSelected !== undefined) validateNewMondayEveningSelected(mondayNewEveningSelected)
    if (tuesdayNewMorningSelected !== undefined) validateNewTuesdayMorningSelected(tuesdayNewMorningSelected)
    if (tuesdayNewAfternoonSelected !== undefined) validateNewTuesdayAfternoonSelected(tuesdayNewAfternoonSelected)
    if (tuesdayNewEveningSelected !== undefined) validateNewTuesdayEveningSelected(tuesdayNewEveningSelected)
    if (wendsdayNewMorningSelected !== undefined) validateNewWendsdayMorningSelected(wendsdayNewMorningSelected)
    if (wendsdayNewAfternoonSelected !== undefined) validateNewWendsdayAfternoonSelected(wendsdayNewAfternoonSelected)
    if (wendsdayNewEveningSelected !== undefined) validateNewWendsdayEveningSelected(wendsdayNewEveningSelected)
    if (thursdayNewMorningSelected !== undefined) validateNewThursdayMorningSelected(thursdayNewMorningSelected)
    if (thursdayNewAfternoonSelected !== undefined) validateNewThursdayAfternoonSelected(thursdayNewAfternoonSelected)
    if (thursdayNewEveningSelected !== undefined) validateNewThursdayEveningSelected(thursdayNewEveningSelected)
    if (fridayNewMorningSelected !== undefined) validateNewFridayMorningSelected(fridayNewMorningSelected)
    if (fridayNewAfternoonSelected !== undefined) validateNewFridayAfternoonSelected(fridayNewAfternoonSelected)
    if (fridayNewEveningSelected !== undefined) validateNewFridayEveningSelected(fridayNewEveningSelected)
    if (saturdayNewMorningSelected !== undefined) validateNewSaturdayMorningSelected(saturdayNewMorningSelected)
    if (saturdayNewAfternoonSelected !== undefined) validateNewSaturdayAfternoonSelected(saturdayNewAfternoonSelected)
    if (saturdayNewEveningSelected !== undefined) validateNewSaturdayEveningSelected(saturdayNewEveningSelected)
    if (sundayNewMorningSelected !== undefined) validateNewSundayMorningSelected(sundayNewMorningSelected)
    if (sundayNewAfternoonSelected !== undefined) validateNewSundayAfternoonSelected(sundayNewAfternoonSelected)
    if (sundayNewEveningSelected !== undefined) validateNewSundayEveningSelected(sundayNewEveningSelected)


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            return Nanny.findById(nannyId).populate('user', 'name').select('availabilities').lean()
        })
        .then(nanny => {
            if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)

        //    const availability = Nanny.findById(nannyId).populate('availability', 'day times')
            const availabilities= nanny.availabilities
            
            availabilities.mondayMorningSelected = mondayNewMorningSelected
            availabilities.mondayAfternoonSelected = mondayNewAfternoonSelected
            availabilities.mondayEveningSelected = mondayNewEveningSelected

            availabilities.tuesdayMorningSelected= tuesdayNewMorningSelected
            availabilities.tuesdayAfternoonSelected= tuesdayNewAfternoonSelected
            availabilities.tuesdayEveningSelected= tuesdayNewEveningSelected

            availabilities.wendsdayMorningSelected= wendsdayNewMorningSelected
            availabilities.wendsdayAfternoonSelected= wendsdayNewAfternoonSelected
            availabilities.wendsdayEveningSelected= wendsdayNewEveningSelected

            availabilities.thursdayMorningSelected= thursdayNewMorningSelected
            availabilities.thursdayAfternoonSelected= thursdayNewAfternoonSelected
            availabilities.thursdayEveningSelected= thursdayNewEveningSelected

            availabilities.fridayMorningSelected = fridayNewMorningSelected
            availabilities.fridayAfternoonSelected= fridayNewAfternoonSelected
            availabilities.fridayEveningSelected= fridayNewEveningSelected

            availabilities.saturdayMorningSelected= saturdayNewMorningSelected
            availabilities.saturdayAfternoonSelected= saturdayNewAfternoonSelected
            availabilities.saturdayEveningSelected= saturdayNewEveningSelected

            availabilities.sundayMorningSelected= sundayNewMorningSelected
            availabilities.sundayAfernoonSelected= sundayNewAfternoonSelected
            availabilities.sundayEveningSelected= sundayNewEveningSelected

            nanny.id= nanny._id.toString()
             nanny.user.id= nanny.user._id.toString()
             nanny.availabilities.forEach(availability => {
                availability.id= availability._id.toString()
                delete availability._id
             })
             delete nanny._id
             delete nanny.user._id
            return nanny
            
        })
}
module.exports = updateAvailabilities