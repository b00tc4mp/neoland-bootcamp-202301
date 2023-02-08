function MyList(){
    const [ListUpdateStamp, setListUpdateStamp] =React.useState(Date.now())


     let stickies
    try {
        stickies= retrieveMyStickies(sessionStorage.email)
        console.log(stickies)
      } catch (error) {
        alert(error.message)
      }

    const handleEditText = event =>{
        try {
            updateStickyText(sessionStorage.email, event.target.id, event.target.innerText)

        } catch (error) {
            alert(error.message)
            
        }
    }

    const handleDelete= event =>{
        try {
            deleteSticky(sessionStorage.email,event.target.id)
            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }
    const handleUpdateVisibility= event =>{
        try {
            updateStickyVisibility(sessionStorage.email,event.target.id, event.target.dataset.visibility=== 'private'? 'public': 'private')
            setListUpdateStamp(Date.now)
        } catch (error) {
            alert(error.message)
        }
    }
    const handleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.email, event.target.id)

            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    

    return<ul className="flex flex-col items-center bg-slate-200 ">
    {stickies.map(sticky => <li className="p-5 shadow-lg shadow-black flex flex-col items-center m-10 w-[40ch] bg-white rounded-full" key={sticky.id}>
        <div className="text-right">
        {sticky.user === sessionStorage.email && <button className="w-5 h-5 bg-black text-[white] m-1" id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>cambiar</button>}

        {sticky.user === sessionStorage.email && <button className="w-5 h-5 bg-black text-[white] m-1" id={sticky.id} onClick={handleDelete}>x</button>}
        </div>
        <p id={sticky.id} contentEditable={sticky.user === sessionStorage.email} onKeyUp={handleEditText} suppressContentEditableWarning={true}>{sticky.text}</p>

        <strong>{sticky.user}</strong>
        <div >
                <img className="flex flex-col items-center w-10"
                    src={sticky.likes.includes(sessionStorage.email) ? "public/heart-full.svg" : "public/heart.svg"}
                    onClick={handleLike} id={sticky.id}
                />
            </div>
    </li>)}
    
</ul>
       
   

}