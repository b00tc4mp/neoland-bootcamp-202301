function Calculin() {
    function handleSubmit(event) {
        event.preventDefault()

        const a = Number(event.target.a.value)
        const b = Number(event.target.b.value)

        console.log(add(a, b))
    }

    return <form onSubmit={handleSubmit}>
        <input type="number" name="a"></input>
        +
        <input type="number" name="b"></input>
        <button type="submit">=</button>
    </form>
}