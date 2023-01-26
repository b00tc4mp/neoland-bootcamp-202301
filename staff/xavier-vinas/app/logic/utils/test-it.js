



















console.log('%cTest it! v0.0', 'color: white; background: radial-gradient(circle, black 0%, gold 100%); padding: .2rem; border: solid black 5px;border-radius: 30px;')

function verify(condition) {
    if (condition)
        console.log('%cTA-GUENO 😁✅', 'color: green; font-weight: bolder;') 
    else
        console.error('%cTA-MALO 🤬🛑', 'color: tomato; font-weight: bolder;')
}