// business layer

function add(a, b) {
        return a + b
}

// presentation layer

const h1 = <h1 className="text-red" title="hello world">hola mundo</h1>

const ul = <ul>
        <li>red</li>
        <li>green</li>
        <li>blue</li>
</ul>

function handleSubmit(event) {
        event.preventDefault()

        const a = Number(event.target.a.value)
        const b = Number(event.target.b.value)

        console.log(add(a, b))
}

const form = <form onSubmit={handleSubmit}>
        <input type="number" name="a"></input>
        +
        <input type="number" name="b"></input>
        <button type="submit">=</button>
</form>

// mount the dom

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render([h1, ul, form])