console.log('%cTest it! v0.1')

function verify(condition) {
    if (condition)
        console.log('%cTA-GUENO ✅ ' + getFileAndLineFromStack(new Error().stack))
    else
        console.error('%cTA-MALO 🛑')
}

// helpers

function getFileAndLineFromStack(stack) {
    var lastIndexOfSlash = stack.lastIndexOf('/')

    var fileAndLine = stack.substring(lastIndexOfSlash + 1)

    return fileAndLine
}

// module.exports = {
//     verify: verify
// }

module.exports = {
    verify
}