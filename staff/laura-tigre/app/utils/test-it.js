console.log('%cTest it! v0.0', 'color: white; background: radial-gradient(circle, darkgrey 0%, orange 100%); padding: 0.5rem;')


function verify(condition) {
    if (condition)
        console.log('%cOK ✅ ' + getFileAndLineFromStack(new Error().stack), 'color: green; font-weight:bold;')
    else
        console.error('%cKO 🛑', 'color: tomato; font-weight:bold;')

}
//helpers

function getFileAndLineFromStack(stack){
    var lastIndexOfSlash = stack.lastIndexOf('/')

    var fileAndLine = stack.substring(lastIndexOfSlash + 1)

    return fileAndLine
}

