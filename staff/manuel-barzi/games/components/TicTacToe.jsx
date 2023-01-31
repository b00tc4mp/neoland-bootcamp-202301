function TicTacToe() {
    console.log('TicTacToe -> render')

    const [symbol, setSymbol] = React.useState('X')

    const [b1, setB1] = React.useState('')
    const [b2, setB2] = React.useState('')
    const [b3, setB3] = React.useState('')
    const [b4, setB4] = React.useState('')
    const [b5, setB5] = React.useState('')
    const [b6, setB6] = React.useState('')
    const [b7, setB7] = React.useState('')
    const [b8, setB8] = React.useState('')
    const [b9, setB9] = React.useState('')

    const [result, setResult] = React.useState('')

    const switchSymbol = () => {
        // if (symbol === 'X')
        //     setSymbol('O')
        // else
        //     setSymbol('X')
        setSymbol(symbol === 'X' ? 'O' : 'X')
    }

    const handleB1 = () => {
        if (!b1) {
            setB1(symbol)
            switchSymbol()
            checkStatus(symbol, b2, b3, b4, b5, b6, b7, b8, b9)
        }
    }

    const handleB2 = () => {
        if (!b2) {
            setB2(symbol)
            switchSymbol()
            checkStatus(b1, symbol, b3, b4, b5, b6, b7, b8, b9)
        }
    }

    const handleB3 = () => {
        if (!b3) {
            setB3(symbol)
            switchSymbol()
            checkStatus(b1, b2, symbol, b4, b5, b6, b7, b8, b9)
        }
    }

    const handleB4 = () => {
        if (!b4) {
            setB4(symbol)
            switchSymbol()
            checkStatus()
        }
    }

    const handleB5 = () => {
        if (!b5) {
            setB5(symbol)
            switchSymbol()
            checkStatus()
        }
    }

    const handleB6 = () => {
        if (!b6) {
            setB6(symbol)
            switchSymbol()
            checkStatus()
        }
    }

    const handleB7 = () => {
        if (!b7) {
            setB7(symbol)
            switchSymbol()
            checkStatus()
        }
    }

    const handleB8 = () => {
        if (!b8) {
            setB8(symbol)
            switchSymbol()
            checkStatus()
        }
    }

    const handleB9 = () => {
        if (!b9) {
            setB9(symbol)
            switchSymbol()
            checkStatus()
        }
    }

    const checkStatus = (b1, b2, b3, b4, b5, b6, b7, b8, b9) => {
        // TODO check all combinations (8) and setResult

        if (b1 && b1 === b2 && b2 === b3)
            setResult(b1 + ' winner')
    }

    const handleRestart = () => {
        setB1('')
        setB2('')
        setB3('')
        setB4('')
        setB5('')
        setB6('')
        setB7('')
        setB8('')
        setB9('')
    }

    return <div className="box">
        <h1>Tic Tac Toe</h1>

        <div className="ttt-grid">
            <button className="ttt-button" onClick={handleB1}>{b1}</button>
            <button className="ttt-button" onClick={handleB2}>{b2}</button>
            <button className="ttt-button" onClick={handleB3}>{b3}</button>

            <button className="ttt-button" onClick={handleB4}>{b4}</button>
            <button className="ttt-button" onClick={handleB5}>{b5}</button>
            <button className="ttt-button" onClick={handleB6}>{b6}</button>

            <button className="ttt-button" onClick={handleB7}>{b7}</button>
            <button className="ttt-button" onClick={handleB8}>{b8}</button>
            <button className="ttt-button" onClick={handleB9}>{b9}</button>
        </div>

        <button onClick={handleRestart}>Restart</button>

        <p>{result}</p>
    </div>
}
