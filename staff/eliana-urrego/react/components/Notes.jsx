/*
TODO create a component that lists notes entered manually via a form
*/

function Notes() {
    console.log('Notes -> render')

    const [notes, setNotes] = React.useState([])
    const handleSubmit = event => {
        event.preventDefault()
        
        const note = event.target.note.value

        setNotes(notes.concat(note))
    }

    return <div style = {{border: '1px solid blue'}}>
    <h1>shopping list</h1>

    <form onSubmit={handleSubmit}>
        <input type="text" name="note"></input>
        <button type="submit">Add</button>
    </form>

        <ul>{notes.map(note => <li>{note}</li>)}</ul>
    </div>
}