



















console.log('%cTest it! v0.0', 'color: white; background: radial-gradient(circle, black 0%, gold 100%); padding: .2rem; border: solid black 5px;border-radius: 30px;')

function verify(condition) {
    if (condition)
        console.log('%cOK 😁✅', 'color: green; font-weight: bold;') 
    else
        console.error('%cKO 🤬🛑', 'color: tomato; font-weight: bold;')
}