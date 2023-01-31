function TicTacToe() {
    console.log('TicTacToe -> render')

    const [symbol, setSymbol] = React.useState('X')

    const [b1,setB1] = React.useState('')

    const switchSymbol = () => {
        // if (symbol === 'X')
        //      setSymbol('O')
        // else
        //      setSymbol('X')
        setSymbol(symbol === 'X' ? 'O' : 'X')
    }

    const handleB1 = () => {
        setB1(symbol)
        switchSymbol()
    }

    return <div className="box">
        <h1>Tic Tac Toe</h1>

        <div className="ttt-grid">
            <button className="ttt-button" onClick={handleB1}>{b1}</button>

        </div>
    </div>
}