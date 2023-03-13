const h1 = 
  <h1 className="text-red" title="hello world">
    hola mundo
  </h1>

const ul = 
  <ul>
    <li>red</li>
    <li>green</li>
    <li>blue</li>
  </ul>


// mount the dom, estas 3 lineas van siempre y en el fichero principal main, se ejecuta una vez

const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)
root.render([ // que nos pinte el contenido de root, en el orden que se encuentran
  h1,
  ul,
  <Calculin />,
  <Hello />,
  <HelloTo who="Lau" />,
  <HelloTo who="Flor" />,
  <HelloTo who="Eli" />,
  <SaluteTo salutation="Bye" who="Xavi" />,
  <SaluteTo salutation="Ciao" who="Juan" />,
  <Counter />,
  <Notes />

])
