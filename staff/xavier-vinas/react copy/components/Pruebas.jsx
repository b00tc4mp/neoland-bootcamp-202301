


function Pruebas(){
    const [count2,setCount2]= React.useState(0)


    return <div>
    <p> Has clicado {count2} veces</p>

        <button onClick={() => setCount2(count2+2)}>sumar</button>
        <button onClick={() => setCount2(count2-2)}>restar</button>
        <button onClick={() => setCount2(0)}>reset</button>


    </div>
}


function Pruebas2(){
    const [result2, setResult2] = React.useState("")
    function handleSubmit(event) {
        event.preventDefault()


        const uno = Number(event.target.uno.value)
        const dos = Number(event.target.dos.value)
        const operacion = event.target.operacion.value

        let result2

        if (operacion === "*")
            result2 = add(uno, dos)
        else if (operacion === "/")
            result2 = sub(uno, dos)

        setResult2(result2)
    }

    return <form onSubmit={handleSubmit}>
        <input type="number" name="uno" />
        <select name="operacion">
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" name="dos"></input>
        <button type="submit">=</button>
        <span>{result2}</span>
    </form>
}





