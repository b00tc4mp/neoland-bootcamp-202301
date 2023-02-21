function MyList() {
    console.log('MyList -> render')

    const [updateStamp, setUpdateStamp] = React.useState(Date.now())

    let stickies

    try {
        stickies = retrieveMyStickies(sessionStorage.userId)
    } catch (error) {
        alert(error.message)
    }

    const handleUpdateText = event => {
        try {
            updateStickyText(sessionStorage.userId, event.target.id, event.target.innerText)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDelete = event => {
        try {
            deleteSticky(sessionStorage.userId, event.target.id)
            setUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateVisibility = event => {
        try {
            updateStickyVisibility(sessionStorage.userId, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public')
            setUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.userId, event.target.id)
            setUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="list-panel">
        {stickies.map(sticky => <li key={sticky.id}>
            <div className="item-controls">
                <button id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility === 'public' ? '-' : '+'}</button>

                <button id={sticky.id} onClick={handleDelete}>x</button>
            </div>

            <p id={sticky.id} contentEditable onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>
            <button id={sticky.id} onClick={handleToggleLike} title={sticky.likes.join('\n')}>{sticky.likes.includes(sessionStorage.userId)? '♥️' :'🤍'} {sticky.likes.length}</button>

            <strong>{sticky.user}</strong>
        </li>)}
    </ul>
}