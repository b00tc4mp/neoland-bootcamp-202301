function List(props){
    console.log('List ->render')

    let stickies

    try{
        stickies = retrievePublicStickies ()
    } catch (error) {
        alert(error.message)
    }


    const handleChangeText = (event) => {
    
        const stickyId = event.target.stickyId.value

        try {
            updateStickyText(sessionStorage.email, stickyid, '');
        } catch (error) {
            console.error(error.message);
        }
    }

    return <ul className="list-panel">
        {stickies.map(sticky => <li key={sticky.id}>
            <p onKeyUp={handleChangeText} contentEditable={true} suppressContentEditableWarning={true}>{sticky.text}</p>
            <strong>{sticky.user}</strong>
        </li>)}
    </ul>
}