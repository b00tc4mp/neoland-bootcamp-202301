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

    const switchSymbol = () => {
         // if (symbol === 'X')
        //     setSymbol('O')
        // else
        //     setSymbol('X')
        setSymbol(symbol === 'X'? 'O' : 'X')
    }

    const handleB1 = () => {
        setB1(symbol)  
        switchSymbol()
    }

    const handleB2 = () => {
        setB2(symbol)  
        switchSymbol()
    }

    const handleB3= () => {
        setB3(symbol)  
        switchSymbol()
    }

    const handleB4 = () => {
        setB4(symbol)  
        switchSymbol()
    }

    const handleB5 = () => {
        setB5(symbol)  
        switchSymbol()
    }

    const handleB6 = () => {
        setB6(symbol)  
        switchSymbol()
    }

    const handleB7 = () => {
        setB7(symbol)  
        switchSymbol()
    }

    const handleB8 = () => {
        setB8(symbol)  
        switchSymbol()
    }

    const handleB9 = () => {
        setB9(symbol)  
        switchSymbol()
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
    </div>
}
