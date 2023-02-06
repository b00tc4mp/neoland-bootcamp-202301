function List() {
    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())
    
    let stickies

    try {
        stickies = retrievePublicStickies()

        console.log(stickies)
    } catch (error) {
        alert(error.message)
    }

    const handleText = event => {

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

    // repasar parte de añadir el botton de delete sticky
    return <ul className="list-panel">
        {stickies.map(sticky => <li key={sticky.id} >
            {sticky.user === sessionStorage.email &&
             <button id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>+/-</button>}
            {sticky.user === sessionStorage.email &&
             <button id={sticky.id} onClick={handleDelete}>X</button>}

            <p id={sticky.id} contentEditable={sticky.user === sessionStorage.email ? true : false} onKeyUp={handleText} suppressContentEditableWarning={true}>{sticky.text}</p>

            <strong>{sticky.user}</strong>
            <img src="public/heart.svg" />
        </li>)}
    </ul>
}
