x// shoot disparo , bullet bala
function RussianRoulette() {
    console.log ('RussianRoulette -> render');

    // TODO state for bullet (random from 1 to 6)
    // HINT Math.round(Math.random() * 5) + 1
    
    const [bullet, setBullet] = React.useState(Math.round(Math.random() * 5) + 1) //estado que inicia con valor ramdon para la bala de agua, va de 6 posiciones, posicion en la q esta la bala

    // TODO state for shoot (from 0)
    const [shoot, setShoot] = React.useState(0) //estado para los disparos que se van haciendo hasta encontrar la bala, empieza de cero pq arranca a jugar

    // TODO handleShoot
    const handleShoot = () => { //dispara e incrementa las posiciones pq no coincide el disparo con la bala
        if (shoot !== bullet) //cuando disparo ycuando es igual no se cumple y deja de disparar, la posicion del disparo coindice con la bala y no me deja disparar nuevamente
         setShoot (shoot + 1) // va aumentanto el shoot en 1
    }

    // TODO handleRestart para cuando termino el juego y empieza de nuevo
    const handleRestart = () => {
        setBullet(Math.round(Math.random()* 5) +1) //inicia en posicion ramdon
        setShoot (0) //resetea los disparos a cero
    }


    return <div>
        <p>{shoot !== bullet ? "😅" : "😢 💦"} 🔫 {shoot}</p> // el shoot es el contador de disparos, si el disparo llego a la bala muestra la cara triste y el agua sino la carita feliz
        <button onClick={handleShoot}>shoot</button> // boton que dispara
        <button onClick={handleRestart}>restart</button>
    </div>

}