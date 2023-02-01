function RussianRoulette(){
  console.log('RussianRoulette -> render')
 const[bullet, setBullet]= React.useState(Math.round(Math.random()* 1) +1 )
  
 const [players, setPlayers]= React.useState(2)
 const[shoot,setShoot]= React.useState(0)

 const handleShoot= () =>{
  if(shoot !== bullet)
   setShoot(shoot +1)
 }
 const handleRestart = () => {
  setBullet(Math.round(Math.random()* (players - 1)) +1)
 
  setShoot(0)
 }

 const handlePlayers = event =>{
  //console.count('change', event.target.value) //para contar clicks o cambios del input del onChange
   //event.target necesito porque el event hace target y veo su valor

   const players= Number(event.target.value)//lo convertimos a numero porque el event tatger es un array siempre
   setBullet(Math.round(Math.random()* (players - 1)) +1)
   setPlayers(players)
 }
 

 return <div>
  <p>{shoot !== bullet ? '😅' : '😢💦'}  🔫  {shoot}</p>
  <label htmlFor="players">Players</label>
  <input id="players" type="number" placeholder="players" min="2" defaultValue="2" onChange={handlePlayers}/>
  <button onClick={handleShoot}>shoot</button>
  <button onClick={handleRestart}>restart</button>
 </div>
}