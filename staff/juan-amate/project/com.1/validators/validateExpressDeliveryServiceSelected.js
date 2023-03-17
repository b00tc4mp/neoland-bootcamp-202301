function validateExpressDeliveryServiceSelected(expressDeliveryServiceSelected) {
    if (typeof expressDeliveryServiceSelected !== 'boolean') throw new TypeError('expressDeliveryServiceSelected is not a boolean')
}

module.exports = validateExpressDeliveryServiceSelected