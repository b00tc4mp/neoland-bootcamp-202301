function RussianRoulette2() {
    console.log('RussianRoulette2 -> render')

    const [bullet, setBullet] = React.useState(Math.round(Math.random() * 1) + 1)
    
    const [shoot, setShoot] = React.useState(0)

    const [players, setPlayers] = React.useState(2)
    
    const handleShoot = () => {
        if (shoot !== bullet) 
            setShoot(shoot + 1)
    }

    const handleRestart = () => {
        setBullet(Math.round(Math.random() * (players - 1)) + 1)
        setShoot(0)
    }
    
    const handlePlayers = event => {
        
        const players = Number(event.target.value)
        setBullet(Math.round(Math.random() * (players - 1)) + 1)
        setShoot(0)
        setPlayers(players)
    }

    return <div>
        <h1>Russian Roulette v2.0</h1>
        <label htmlFor="players">players</label>
        <input id="players" type="number" placeholder="number of players" min="2" defaultValue="2" onChange={handlePlayers}></input>
        <p>{shoot !== bullet ? '😅' : '😢💦' } 🔫 {shoot}</p>
        <button onClick={handleShoot}>shoot</button>
        <button onClick={handleRestart}>restart</button>
    </div>
}