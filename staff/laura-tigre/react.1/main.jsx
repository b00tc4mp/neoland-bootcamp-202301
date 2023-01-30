
//     <Counter />,
//     <Notes />

// ])
const h1=<h1 className="text-red" title="hello world">hola caracola</h1>
const h2= <h2 className="text-arcoiris">Colores</h2>
const ul= <ul>
    <li className="text-yellow">amarillo</li>
    <li className="text-green">verde</li>
    <li className="text-blue">azul</li>
</ul>



// montar el dom

const container = document.querySelector('#root')
const root= ReactDOM.createRoot(container)

root.render([
    h1,
    h2,
    ul,
    <Calculin />,
    <Hello />,
    <HelloTo who="Manel" />,
    <HelloTo who="Daniel" />,
    <SaluteTo salutation= "Boungiorno" who="Manel" />,
    <SaluteTo salutation= "Buona sera" who="Daniel" />,
    <Counter />,
    <Notes />

])
