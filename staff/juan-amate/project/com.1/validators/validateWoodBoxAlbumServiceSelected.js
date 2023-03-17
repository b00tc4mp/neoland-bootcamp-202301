function validateWoodBoxAlbumServiceSelected(woodBoxAlbumServiceSelected) {
    if (typeof woodBoxAlbumServiceSelected !== 'boolean') throw new TypeError('woodBoxAlbumServiceSelected is not a boolean')
}

module.exports = validateWoodBoxAlbumServiceSelected