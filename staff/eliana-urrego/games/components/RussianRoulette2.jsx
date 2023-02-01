function RussianRoulette2() {
    console.log('RussianRoulette -> render');

    // TODO state for bullet (random from 1 to 6)
    // HINT Math.round(Math.random() * 5) + 1
    const [bullet, setBullet] = React.useState(Math.round(Math.random() * 1) + 1)

    // TODO state for shoot (from 0)
    const [shoot, setShoot] = React.useState(0)

    const [players, setPlayers] = React.useState(2)

    //handleShoot
    const handleShoot = () => {
        if (shoot !== bullet)
            setShoot(shoot + 1)
    }
    // TODO handleRestart
    const handleRestart = () => {
        setBullet(Math.round(Math.random() * (players - 1)) + 1)
        setShoot(0)
    }

    const handlePlayers = event => {
        //console.log('change', event.target.value)

        const players = Number(event.target.value)
        setBullet(Math.round(Math.random() * (players - 1)) + 1)
        setShoot(0)
        setPlayers(players)
    }


    return <div>
        <label htmlFor="players">players</label>
        <input id="players" type="number" placeholder="players" min="2" defaultValue="2" onChange={handlePlayers} />
        <p>{shoot !== bullet ? '😅' : '😢💦'} 🔫 {shoot}</p>
        <button onClick={handleShoot}>shoot</button>
        <button onClick={handleRestart}>restart</button>
    </div>

}