function MyList() {
    console.log('MyList -> render')

    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())

    let stickies

    try {
        stickies = retrieveMyStickies(sessionStorage.email)
    } catch (error) {
        alert(error.message)
    }

    const handleUpdateText = event => {
        try {
            updateStickyText(sessionStorage.email, event.target.id, event.target.innerText)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDelete = event => {
        try {
            deleteSticky(sessionStorage.email, event.target.id)

            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateVisibility = event => {
        try {
            updateStickyVisibility(sessionStorage.email, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public')
            
            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.email, event.target.id)

            setListUpdateStamp(Date.now())
        } catch(error) {
            alert(error.message)
        }
    }

    return <ul className="list-panel">
        {stickies.map(sticky => <li key={sticky.id} className='li-sticky'>
            <div className='sticky-buttons'>
                {sticky.visibility === 'private' ? <p>⛔️ private</p> : <p>👨‍👩‍👧‍👦 public</p>}
                
                <button id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>🚦</button>

                <button id={sticky.id} onClick={handleDelete}>❌</button>
            </div>

            <p id={sticky.id} contentEditable onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>
            <p>{sticky.likes.length}</p>
            <img className="like" src={sticky.likes.includes(sessionStorage.email) ? "public/heart-full.svg" : "public/heart.svg" } title={sticky.likes.join('\n')} onClick={handleLike} id={sticky.id}></img>
            <strong>{sticky.user}</strong>
        </li>)}
    </ul>
}