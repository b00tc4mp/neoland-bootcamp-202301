function validateAlbumServiceSelected(albumServiceSelected) {
    if (typeof albumServiceSelected !== 'boolean') throw new TypeError('albumServiceSelected is not a boolean')
}

module.exports = validateAlbumServiceSelected