function List(props){
    console.log('List ->render')

    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())

    let stickies 

    try{
        stickies = retrievePublicStickies ()
    } catch (error) {
        alert(error.message)
    }


    const handleUpdateText = (event) => {
        try {
            updateStickyText(sessionStorage.email, event.target.id, event.target.innerText);
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleDeleteSticky = (event) =>{
        try {
            deleteSticky(sessionStorage.email, event.target.id,);
            setListUpdateStamp(Date.now())
           }catch  (error) {
            console.error(error.message);
        }
    }

    const handleUpdateVisibility = (event) => {
        try{
            updateStickyVisibility (sessionStorage.email, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public')
            setListUpdateStamp(Date.now())
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
    
    return <ul className="flex flex-col items-center">
        {stickies.map(sticky => <li className="m-10 p-4 w-[40ch] border-2" key={sticky.id}>
            <div className="text-right">
                {sticky.user === sessionStorage.email && 
                <button className={sticky.visibility === 'public' ? 'classPublic' : 'classPrivate'} id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility}</button>}
            
                {sticky.user === sessionStorage.email &&
                <button id={sticky.id} onClick={handleDeleteSticky}>X</button>}
            </div>
        
            <p className="text-left" id={sticky.id} contentEditable={sticky.user === sessionStorage.email} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>
            
            <strong className="text-right w-full block">{sticky.user}</strong>
            
            <div className="flex items-center gap-1 justify-end" >
                <img className="heart-icon w-8"
                    src={sticky.likes.includes(sessionStorage.email) ? "public/heart-full.svg" : "public/heart.svg"}
                    onClick={handleLike} id={sticky.id} title={sticky.likes.join('\n')}
                />
                {sticky.likes.length}
            </div>
            
        </li>)}
    </ul>
}