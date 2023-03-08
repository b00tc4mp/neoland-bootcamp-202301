const h1 = <h1 className="text-red" title="hello world">hola mundo</h1>
      
const ul = <ul>
        <li>red</li>
        <li>green</li>
        <li>blue</li>
</ul>

const form = <form onSubmit={function(event) {
        event.preventDefault()

        const a = Number(event.target.a.value)
        const b = Number(event.target.b.value)

        console.log(a + b)
}}>
        <input type="number" name="a"></input>
        +
        <input type="number" name="b"></input>
        <button type="submit">=</button>
</form>

// mount the dom

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render([h1, ul, form])