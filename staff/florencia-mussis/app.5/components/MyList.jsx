function MyList(){

    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())

    let stickies 

    try{
        stickies = retrieveMyStickies (sessionStorage.email)
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
    

    return <ul className="list-panel">
        {stickies.map(sticky => <li key={sticky.id}>
        
            {<button className={sticky.visibility === 'public' ?  'classPublic '  : 'classPrivate'} id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility}</button>}

            {sticky.user === sessionStorage.email &&
            <button id={sticky.id} onClick={handleDeleteSticky}>x</button>}

            <p id={sticky.id} contentEditable={sticky.user === sessionStorage.email} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>
            
            <strong>{sticky.user}</strong>

            <div >
                <img className="heart-icon"
                    src={sticky.likes.includes(sessionStorage.email) ? "public/heart-full.svg" : "public/heart.svg"}
                    onClick={handleLike} id={sticky.id} title={sticky.likes.join('\n')} 
                />
                {sticky.likes.length}
            </div>
            
        </li>)}
    </ul>
}