const h1 = React.createElement('h1', { className: 'text-red', title: 'hello world' }, 'hola mundo')

const li0 = React.createElement('li', null, 'red')
const li1 = React.createElement('li', null, 'green')
const li2 = React.createElement('li', null, 'blue')

//const ul = React.createElement('ul', null, [li0, li1, li2])
const ul = React.createElement('ul', null, li0, li1, li2)

// mount the dom

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render([h1, ul])