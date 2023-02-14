const h1 = <h1 className="text-red" title="hello world">hola mundo</h1>

const ul = <ul>
    <li>red</li>
    <li>green</li>
    <li>blue</li>
</ul>

// mount the dom 

const container = document.querySelector("#root")//
const root = ReactDOM.createRoot(container) // estas liineas van siempre 

root.render([// 
    h1,
    ul,
    <Calculin />,
    <Hello />,
    <HelloTo who="Lau" />,
    <HelloTo who="flor" />,
    <HelloTo who=" Eli" />,
    <SaluteTo salutation="Bye" who="Xavi" />,
    <SaluteTo salutation="Ciao" who="Juan" />,
    <Counter/>,
    <Notes/>,
    

])