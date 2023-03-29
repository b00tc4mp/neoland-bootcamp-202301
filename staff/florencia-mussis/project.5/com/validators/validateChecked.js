function validateChecked(checked) {
    if (typeof checked !== "boolean" ) throw new TypeError('Checked is not a boolean')
}

module.exports = validateChecked