function List() {
    console.log('List -> render')

    let stickies

    try {
        stickies = retrievePublicStickies()

        console.log(stickies)
    } catch(error) {
        alert(error.message)
    }

    return <ul className="list-panel">
        {stickies.map(sticky => <li>
            <p>{sticky.text}</p>
            <strong>{sticky.user}</strong>
        </li>)}
    </ul>
}