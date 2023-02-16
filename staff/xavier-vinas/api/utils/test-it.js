console.log('%cTest it! v0.1')

function verify(condition) {
    if (condition)
        console.log('%cTA-GUENO ✅ ' + getFileAndLineFromStack(new Error().stack))
    else
        console.error('%cTA-MALO 🛑')
}

// helpers

function getFileAndLineFromStack(stack) {
    const filePath = stack.split("\n")[2]

    var lastIndexOfSlash = filePath.lastIndexOf('/')

    var fileAndLine = filePath.substring(lastIndexOfSlash + 1)

    return fileAndLine
}


module.exports = {
    verify
}