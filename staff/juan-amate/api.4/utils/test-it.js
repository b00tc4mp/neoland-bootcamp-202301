console.log('%cTest it! v0.2', 'color: white; background: radial-gradient(circle, gold 0%, darkgoldenrod 100%); padding: .5rem;')

function verify(condition) {
    if (condition)
        console.log('%cOK ✅ ' + getFileAndLineFromStack(new Error().stack), 'color: green; font-weight: bold')
    else
        console.error('%cKO 🛑', 'color: tomato; font-weight: bold;')
}

// helpers

function getFileAndLineFromStack(stack) {
    const filePath = stack.split('\n')[2]

    var lastIndexOfSlash = filePath.lastIndexOf('/')

    var fileAndLine = filePath.substring(lastIndexOfSlash + 1)

    return fileAndLine
}

// module.exports = {
//     verify : verify
// }

module.exports = { verify }
