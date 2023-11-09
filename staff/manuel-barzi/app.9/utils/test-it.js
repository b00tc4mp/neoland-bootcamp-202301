console.log('%cTest it! v0.0', 'color: white; background: radial-gradient(circle, tomato 0%, dodgerblue 100%); padding: .5rem;')

function verify(condition) {
    if (condition)
        console.log('%cOK ✅', 'color: green; font-weight: bold;')
    else
        console.error('%cKO 🛑', 'color: tomato; font-weight: bold;')
}