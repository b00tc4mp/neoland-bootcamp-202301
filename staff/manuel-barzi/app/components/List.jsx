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

    return <ul className="flex flex-col items-center">
        {stickies.map(sticky => <li className="bg-[gold] m-10 w-[40ch]" key={sticky.id}>
            <div className="text-right">
                {sticky.user === sessionStorage.userId && <button className="w-5 h-5 bg-black text-[gold] m-1" id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility === 'public' ? '-' : '+'}</button>}

                {sticky.user === sessionStorage.userId && <button className="w-5 h-5 bg-black text-[gold] m-1" id={sticky.id} onClick={handleDelete}>x</button>}
            </div>

            <p className="p-2" id={sticky.id} contentEditable={sticky.user === sessionStorage.userId} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>

            <div className="text-right">
                <button className="h-5 bg-black text-[gold] m-1" id={sticky.id} onClick={handleToggleLike} title={sticky.likes.join('\n')}>{sticky.likes.includes(sessionStorage.userId) ? '💚' : '🤍'} {sticky.likes.length}</button>

                <strong>{sticky.user}</strong>
            </div>
        </li>)}
    </ul>
}