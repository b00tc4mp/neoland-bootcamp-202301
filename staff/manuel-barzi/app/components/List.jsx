function List() {
    console.log('List -> render')

    const [updateStamp, setUpdateStamp] = React.useState(Date.now())

    let stickies

    try {
        stickies = retrievePublicStickies()
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
            setUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateVisibility = event => {
        try {
            updateStickyVisibility(sessionStorage.email, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public')
            setUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="list-panel">
        {stickies.map(sticky => <li key={sticky.id}>
            {sticky.user === sessionStorage.email && <button id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>+/-</button>}

            {sticky.user === sessionStorage.email && <button id={sticky.id} onClick={handleDelete}>x</button>}

            {
                // sticky.user === sessionStorage.email ?
                //     <p id={sticky.id} contentEditable onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>
                //     :
                //     <p id={sticky.id}>{sticky.text}</p>
            }
            {/* <p id={sticky.id} contentEditable={sticky.user === sessionStorage.email? true : false} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p> */}
            <p id={sticky.id} contentEditable={sticky.user === sessionStorage.email} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>

            <strong>{sticky.user}</strong>
        </li>)}
    </ul>
}