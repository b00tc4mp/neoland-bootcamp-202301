console.log('%cTest it! v0.1', 'color: white; background: radial-gradient(circle, gold 0%, darkgoldenrod 100%); padding: .5rem;')

function verify(condition) {
    if (condition)
        console.log('%cOK ✅ ' + getFileAndLineFrom(new Error().stack), 'color: green; font-weight: bold')
    else
        console.error('%cKO 🛑', 'color: tomato; font-weight: bold;')
}

// helpers

function getFileAndLineFrom(stack) {
    var lastIndexOfSlash = stack.lastIndexOf('/')

    var fileAndLine = stack.substring(lastIndexOfSlash + 1)

    return fileAndLine
}

// module.exports = {
//     verify : verify
// }

module.exports = {
    verify
}
