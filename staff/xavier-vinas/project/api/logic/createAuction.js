const { User, Auction } = require('../data/models')
const { validateBidRate, validatePrice, validatePhoto, validateUserId, ExistenceError, validateTitle, validateDescription } = require('../../com')


/**
 * Creates a new auction 
 * 
 * @param {string} userId the password the user belongs
 * @param {string} title The title of auction 
 * @param {string} desciption The desciption of auction 
 * @param {number} price The price of auction 
 * @param {string} photo The photo of auction 
 * @param {number} bidRate The bid rate of auction 
 * @param {date} startDate The start date of the auction
 * @param {date} endDate The end date of the auction
 */
function createAuction(userId, title, description, price, photo, bidRate, startDate, endDate) {
    validateUserId(userId)
    validateTitle(title)
    validateDescription(description)
    validatePrice(price)
    validatePhoto(photo)
    validateBidRate(bidRate)
    if (!(startDate instanceof Date)) throw new TypeError('startDate is not a date')
    if (!(endDate instanceof Date)) throw new TypeError('endDate is not a date')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (user.role !== 'admin') throw new TypeError(`user with id ${userId} is not admin`)

            const auction = new Auction({
                user: userId,
                title,
                description,
                price,
                photo,
                bidRate,
                startDate,
                endDate
            })
            return auction.save()
        })
        .then(auction => {
            console.log(auction)
        })
}


module.exports = createAuction