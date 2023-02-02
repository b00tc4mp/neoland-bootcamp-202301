function List (){
  let stickies
  try {
    stickies=retrievePublicStickies()
    console.log(stickies)
  } catch (error) {
    alert(error.message)
  }
 
  const handleEditText = event =>{
    event.preventDefault()

    const stickyId = event.target.stickyId.value
    

    try {
      updateStickyText(sessionStorage.email, stickyId,text)
    } catch (error) {
      alert('not possible to change')
    }
  }
 

    return <ul className="list-panel">
        {stickies.map(sticky => 
        <li key={sticky.id}>
         
          <p onKeyUp={handleEditText} contentEditable={true} suppressContentEditableWarning={true}>
            {sticky.text}
            
          </p>
        
          <strong>{sticky.user}</strong>
        </li>)}
      </ul>
      
   

}