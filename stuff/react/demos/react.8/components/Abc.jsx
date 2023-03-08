function Abc() {
    console.log('Abc -> render')

    const [char, setChar] = React.useState('')

    const handleSetA = () => setChar('A')

    const handleSetB = () => setChar('B')

    const handleSetC = () => setChar('C')

    return <div className="box">
        <p>You clicked on {char}</p>

        <button onClick={handleSetA}>A</button>
        <button onClick={handleSetB}>B</button>
        <button onClick={handleSetC}>C</button>
    </div>
}
