function Calculin() {
    console.log('Calculin -> render')

    const [result, setResult] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault()

        const a = Number(event.target.a.value)
        const b = Number(event.target.b.value)
        const op = event.target.op.value

        let result

        if (op === '+')
            result = add(a, b)
        else if (op === '-')
            result = sub(a, b)

        setResult(result)
    }

    return <form onSubmit={handleSubmit}>
        <input type="number" name="a"></input>
        <select name="op">
            <option value="+">+</option>
            <option value="-">-</option>
        </select>
        <input type="number" name="b"></input>
        <button type="submit">=</button>
        <span>{result}</span>
    </form>
}