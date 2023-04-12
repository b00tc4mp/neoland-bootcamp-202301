var stickiesCount = 0

function createStickyId() {
    return 'sticky-' + stickiesCount++
}

export default createStickyId