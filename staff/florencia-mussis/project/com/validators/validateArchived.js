function validateArchived(archived) {
    if (typeof archived !== "boolean" ) throw new TypeError('Archived is not a boolean')
}

module.exports = validateArchived