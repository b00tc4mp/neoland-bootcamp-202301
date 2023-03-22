const { User, Nanny } = require('../data/models')
const { validateUserId, validateUserNannyId, validateNewMondayMorningSelected,
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

function updateAvailabilities(userId, nannyId,
newMondayMorningSelected, 
newMondayAfternoonSelected,
newMondayEveningSelected,
newTuesdayMorningSelected, newTuesdayAfternoonSelected, newTuesdayEveningSelected, newWendsdayMorningSelected, newWendsdayAfternoonSelected, newWendsdayEveningSelected, newThursdayMorningSelected, newThursdayAfternoonSelected, newThursdayEveningSelected, newFridayMorningSelected, newFridayAfternoonSelected, newFridayEveningSelected, newSaturdayMorningSelected, newSaturdayAfternoonSelected, newSaturdayEveningSelected, newSundayMorningSelected, newSundayAfternoonSelected, newSundayEveningSelected,) {
    validateUserId(userId)
    validateUserNannyId(nannyId)
    if (newMondayMorningSelected !== undefined)validateNewMondayMorningSelected(newMondayMorningSelected)
    if (newMondayAfternoonSelected !== undefined) validateNewMondayAfternoonSelected(newMondayAfternoonSelected)
    if (newMondayEveningSelected !== undefined) validateNewMondayEveningSelected(newMondayEveningSelected)
    if (newTuesdayMorningSelected !== undefined) validateNewTuesdayMorningSelected(newTuesdayMorningSelected)
    if (newTuesdayAfternoonSelected !== undefined) validateNewTuesdayAfternoonSelected(newTuesdayAfternoonSelected)
    if (newTuesdayEveningSelected !== undefined) validateNewTuesdayEveningSelected(newTuesdayEveningSelected)
    if (newWendsdayMorningSelected !== undefined) validateNewWendsdayMorningSelected(newWendsdayMorningSelected)
    if (newWendsdayAfternoonSelected !== undefined) validateNewWendsdayAfternoonSelected(newWendsdayAfternoonSelected)
    if (newWendsdayEveningSelected !== undefined) validateNewWendsdayEveningSelected(newWendsdayEveningSelected)
    if (newThursdayMorningSelected !== undefined) validateNewThursdayMorningSelected(newThursdayMorningSelected)
    if (newThursdayAfternoonSelected !== undefined) validateNewThursdayAfternoonSelected(newThursdayAfternoonSelected)
    if (newThursdayEveningSelected !== undefined) validateNewThursdayEveningSelected(newThursdayEveningSelected)
    if (newFridayMorningSelected !== undefined) validateNewFridayMorningSelected(newFridayMorningSelected)
    if (newFridayAfternoonSelected !== undefined) validateNewFridayAfternoonSelected(newFridayAfternoonSelected)
    if (newFridayEveningSelected !== undefined) validateNewFridayEveningSelected(newFridayEveningSelected)
    if (newSaturdayMorningSelected !== undefined) validateNewSaturdayMorningSelected(newSaturdayMorningSelected)
    if (newSaturdayAfternoonSelected !== undefined) validateNewSaturdayAfternoonSelected(newSaturdayAfternoonSelected)
    if (newSaturdayEveningSelected !== undefined) validateNewSaturdayEveningSelected(newSaturdayEveningSelected)
    if (newSundayMorningSelected !== undefined) validateNewSundayMorningSelected(newSundayMorningSelected)
    if (newSundayAfternoonSelected !== undefined) validateNewSundayAfternoonSelected(newSundayAfternoonSelected)
    if (newSundayEveningSelected !== undefined) validateNewSundayEveningSelected(newSundayEveningSelected)


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            return Nanny.findById(nannyId)
        })
        .then(nanny => {
            if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)

            const availabilities = []
            
            if(newMondayMorningSelected )  availabilities.push({day: 'Monday', times: ['Morning']})

            if(newMondayAfternoonSelected ) {
                const dayExists = availabilities.find(availability => availability.day === 'Monday')
                if(dayExists) dayExists.times.push('Afternoon')
                else  availabilities.push({day: 'Monday', times: ['Afternoon']})
            }

            if(newMondayEveningSelected ) {
                const dayExists = availabilities.find(availability => availability.day === 'Monday')
                if(dayExists) dayExists.times.push('Evening')
                else  availabilities.push({day: 'Monday', times: ['Evening']})
            }


            if( newTuesdayMorningSelected )   availabilities.push({day: 'Tuesday', times: ['Morning']})

            if( newTuesdayAfternoonSelected )  {
                const dayExists = availabilities.find(availability => availability.day === 'Tuesday')
                if(dayExists) dayExists.times.push('Afternoon')
                else  availabilities.push({day: 'Tuesday', times: ['Afternoon']})
            }

            if( newTuesdayEveningSelected ) {
                const dayExists = availabilities.find(availability => availability.day === 'Tuesday')
                if(dayExists) dayExists.times.push('Evening')
                else  availabilities.push({day: 'Tuesday', times: ['Evening']})
            }



            if( newWendsdayMorningSelected )   availabilities.push({day: 'Wendsday', times: ['Morning']})

            if( newWendsdayAfternoonSelected )  {
                const dayExists = availabilities.find(availability => availability.day === 'Wendsday')
                if(dayExists) dayExists.times.push('Afternoon')
                else  availabilities.push({day: 'Wendsday', times: ['Afternoon']})
            }

            if( newWendsdayEveningSelected ) {
                const dayExists = availabilities.find(availability => availability.day === 'Wendsday')
                if(dayExists) dayExists.times.push('Evening')
                else  availabilities.push({day: 'Wendsday', times: ['Evening']})
            }

            
            if( newThursdayMorningSelected )   availabilities.push({day: 'Thursday', times: ['Morning']})

            if( newThursdayAfternoonSelected )  {
                const dayExists = availabilities.find(availability => availability.day === 'Thursday')
                if(dayExists) dayExists.times.push('Afternoon')
                else  availabilities.push({day: 'Thursday', times: ['Afternoon']})
            }

            if( newThursdayEveningSelected ) {
                const dayExists = availabilities.find(availability => availability.day === 'Thursday')
                if(dayExists) dayExists.times.push('Evening')
                else  availabilities.push({day: 'Thursday', times: ['Evening']})
            }

            if( newFridayMorningSelected )   availabilities.push({day: 'Friday', times: ['Morning']})

            if( newFridayAfternoonSelected )  {
                const dayExists = availabilities.find(availability => availability.day === 'Friday')
                if(dayExists) dayExists.times.push('Afternoon')
                else  availabilities.push({day: 'Friday', times: ['Afternoon']})
            }

            if( newFridayEveningSelected ) {
                const dayExists = availabilities.find(availability => availability.day === 'Friday')
                if(dayExists) dayExists.times.push('Evening')
                else  availabilities.push({day: 'Friday', times: ['Evening']})
            }


            if( newSaturdayMorningSelected )   availabilities.push({day: 'Saturday', times: ['Morning']})

            if( newSaturdayAfternoonSelected )  {
                const dayExists = availabilities.find(availability => availability.day === 'Saturday')
                if(dayExists) dayExists.times.push('Afternoon')
                else  availabilities.push({day: 'Saturday', times: ['Afternoon']})
            }

            if( newSaturdayEveningSelected ) {
                const dayExists = availabilities.find(availability => availability.day === 'Saturday')
                if(dayExists) dayExists.times.push('Evening')
                else  availabilities.push({day: 'Saturday', times: ['Evening']})
            }



            if( newSundayMorningSelected )   availabilities.push({day: 'Sunday', times: ['Morning']})

            if( newSundayAfternoonSelected )  {
                const dayExists = availabilities.find(availability => availability.day === 'Sunday')
                if(dayExists) dayExists.times.push('Afternoon')
                else  availabilities.push({day: 'Sunday', times: ['Afternoon']})
            }

            if( newSundayEveningSelected ) {
                const dayExists = availabilities.find(availability => availability.day === 'Sunday')
                if(dayExists) dayExists.times.push('Evening')
                else  availabilities.push({day: 'Sunday', times: ['Evening']})
            }



            nanny.availabilities= availabilities
            
                 

                nanny.id = nanny._id.toString()
                nanny.user.id = nanny.user._id.toString()
                nanny.availabilities.forEach(availability => {
                availability.id = availability._id.toString()
                delete availability._id
            })
            delete nanny._id
            delete nanny.user._id
            return nanny.save()

        })
}
module.exports = updateAvailabilities