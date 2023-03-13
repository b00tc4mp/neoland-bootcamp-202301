/*
TODO create a component that lists notes entered manually via a form
*/

function Notes() {
    console.log('Notes ->render') //para que chivate en la consola

    const [notes, setNotes] = React.useState([]) //nuevo array

    const handleSubmit = event => { // se usa para especificar el método que debe de ejecutarse cuando el formulario es guardado.
        event.preventDefault()

        const note = event.target.note.value

        setNotes(notes.concat(note))

    }

    const listItems = notes.map((note) => <li> {note} </li>) //cada nota la convierte en un li

    return <div style={{border: '1px solid black'}}>
        <h1>Notes</h1>

        <form onSubmit={handleSubmit}>      
            <input type="text" name="note"></input>
            <button type="submit">Add</button>
        </form>
        
        <ul>{listItems}</ul>
    </div>
}

