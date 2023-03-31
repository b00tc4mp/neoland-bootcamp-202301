function validateMiniAlbumsServiceSelected(miniAlbumsServiceSelected) {
    if (typeof miniAlbumsServiceSelected !== 'boolean') throw new TypeError('miniAlbumsServiceSelected is not a boolean')
}

module.exports = validateMiniAlbumsServiceSelected