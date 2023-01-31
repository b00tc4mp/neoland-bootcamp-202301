/*
TODO create a component that lists notes entered manually via a form
*/

function Notes() {
    console.log('Notes -> render') /* chivato para saber cuando pinta en la pagina */

    const [notes, setNotes] = React.useState([]) /* declaramos variables: estado inicial y funcion  */

    const handleSubmit = event => { /*  */
        event.preventDefault()

        const note = event.target.note.value /* recoge el valor de la nota */

        const newNotes = notes.concat(note) /* concatena en un nuevo array el valor recogido arriba */

        setNotes(newNotes) 
    }

    const listItems = notes.map((note) => <li>{note}</li>)
    
    /* comenzamos creando los elementos visuales para capturar la entrada de datos */
    return <div style={{ border: '1px solid black' }}>
        <h1>Notes</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="note"></input>
            <button type="submit">Add</button>
        </form>

        <ul>{listItems}</ul>
    </div>
}