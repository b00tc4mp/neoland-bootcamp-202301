function List (){
  const[listUpdateStamp, setListUpdateStamp]= React.useState(Date.now())
  
  let stickies
  
  try {
    stickies=retrievePublicStickies()
    console.log(stickies)
  } catch (error) {
    alert(error.message)
  }
  
  const handleEditText = (event) =>{
    
  
    try {
      updateStickyText(sessionStorage.email,event.target.id,event.target.innerText)
      
      
      
    } catch (error) {
      alert(error.message)
    }
  }
   const handleDelete= event =>{
    
    

    try {
      deleteSticky(sessionStorage.email, event.target.id)
      setListUpdateStamp(Date.now())
    } catch (error) {
     alert(error.message)
      
    }
   }

   const handleUpdateVisibility= event=> {

    try {
      updateStickyVisibility(sessionStorage.email, event.target.id, event.target.dataset.visibility === 'public'? 'private':'public')
      setListUpdateStamp(Date.now())
    } catch (error) {
      alert(error.message)
    }
   }
   const handleLike = event =>{
    try {
      toggleLikeSticky(sessionStorage.email, event.target.id)
      setListUpdateStamp(Date.now)
    } catch (error) {
      alert(error.message)
      
    }
   }

    return <ul className="flex flex-col items-center h-screen gap-4 m-3">
        {stickies.map(sticky => 
        <li className="flex flex-col items-end bg-[#e5e7eb] w-[40ch] p-3 rounded-lg border-solid border-4 border-[#6b7280] " key={sticky.id}>

          {/* {
            sticky.user===sessionStorage.email ?
            <p id={sticky.id} contentEditable onKeyUp={handleEditText} suppressContentEditableWarning={true}>
            {sticky.text}</p> :
            <p id={sticky.id}>{sticky.text}</p>
          } */}
         
         {/* <p id={sticky.id} contentEditable={sticky.user=== sessionStorage.email? true:false} onKeyUp={handleEditText} suppressContentEditableWarning={true}>
            {sticky.text}
            </p> */}
            <div className="flex ">
            {sticky.user === sessionStorage.email &&
            <button className="border-solid border-2 border-[black] w-6 h-6 text-center m-1" id={sticky.id} onClick={handleUpdateVisibility} data-visibility={sticky.visibility}>🌍</button> }
            {sticky.user === sessionStorage.email &&
            <button className="border-solid border-2 border-[black] w-6 h-6 text-center m-1" id={sticky.id} onClick={handleDelete}>X</button> }
            </div>
            <p className="w-[35ch] text-left" id={sticky.id} contentEditable={sticky.user=== sessionStorage.email} onKeyUp={handleEditText} suppressContentEditableWarning={true}>
            {sticky.text}
            </p>
            
              <div className="flex" >
              <img className="h-5 w-5"
              src={sticky.likes.includes(sessionStorage.email)? 'public/heart-full.svg': 'public/heart.svg'}
              onClick={handleLike} id={sticky.id} title={sticky.likes.join('\n')}/>
              <p>{sticky.likes.length}</p>
              
              </div>
              <strong>{sticky.user}</strong>
        </li>)}
      </ul>
      
   

}