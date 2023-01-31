function RussianRoulette() {
    console.log('RussianRoulette -> render');

    // TODO state for bullet (random from 1 to 6)
    // HINT Math.round(Math.random() * 5) + 1
    const [bullet, setBullet] = React.useState(Math.round(Math.random() * 5) + 1)

    // TODO state for shoot (from 0)
    const [shoot, setShoot] = React.useState(0)

    // TODO handleShoot
    const handleShoot = () => {
        if (shoot !== bullet)
            setShoot(shoot + 1)
    }

    // TODO handleRestart
    const handleRestart = () => {
        setBullet(Math.round(Math.random() * 5) + 1)
        setShoot(0)
    }

    return <div>
        <p>{shoot !== bullet ? '😅' : '😢 💦'} 🔫 {shoot}</p>
        <button onClick={handleShoot}>shoot</button>
        <button onClick={handleRestart}>restart</button>
    </div>
}