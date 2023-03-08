/*
TODO create a component that lists notes entered manually via a form
*/

function Notes() {
    console.log('Notes -> render')

    const [notes, setNotes] = React.useState([])

    const handleSubmit = event => {
        event.preventDefault()

        const note = event.target.note.value

        //console.log(note)

        const newNotes = notes.concat(note)

        setNotes(newNotes)   
    }

    const listItems = notes.map(note => <li>{note}</li>)

    return <div className="box">
        <h1>Notes</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="note"></input>
            <button type="submit">Add</button>
        </form>
        
        {/* <ul>{notes.map(note => <li>{note}</li>)}</ul> */}
        <ul>{listItems}</ul>
    </div>
}