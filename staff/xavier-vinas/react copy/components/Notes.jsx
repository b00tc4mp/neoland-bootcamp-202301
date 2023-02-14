/*
TODO create a component that lists notes entered manually via a form
*/
function Notes() {

    //console.log("Notes-> render")

    const [notes, setNotes] = React.useState([])

    const handleSubmit = event => {
        event.preventDefault()

        const note = event.target.note.value
        setNotes(notes.concat(note))

    }
    const listItems = notes.map((note) =>
        <li>{note}</li>)

    return <div style={{ border: "1px solid black" }}>
        <h1>Notas</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="note" />
            <button type="submit"> ADD </button>
        </form>

        <ul>{listItems}</ul>
    </div>
}

