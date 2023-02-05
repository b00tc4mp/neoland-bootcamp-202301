function List() {
    console.log('list -> render')
    let stickies

    try {
        stickies = retrievePublicStickies()
        console.log(stickies)
    } catch (error) {
        alert(error.message)
    }

    const handleUpdateText = event => {
        try{
            updateStickyText(sessionStorage.email, event.target.id, event.target.innerText)
        }catch(error){
        alert('this note is not possible to edit')
        }
    }
    
    return <ul className="list-panel">
        {stickies.map(sticky => <li key={sticky.id}>
            <p id={sticky.id} contentEditable={sticky.user === sessionStorage.email? true : false} 
            onKeyUp={handleUpdateText} 
            suppressContentEditableWarning={true}>{sticky.text}</p>
            <strong>{sticky.user}</strong>
        </li>)}
    </ul>
}