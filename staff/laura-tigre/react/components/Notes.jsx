/*
TODO create a component that lists notes entered manually via a form
*/

function Notes() {
    console.log('Notes -> render')
    const [notes, setNotes] = React.useState([])

    const handleSubmit = event => { // con esta nueva constante lo que hago es crear un nuevo array y le voy concatenando las notas nuevas en este nuevo array
        //paralizo el evento en esa nota
        event.preventDefault()
        //cojo el valor de esta nota nueva
        const note= event.target.note.value
        // concateno la nueva nota en este nuevo array
        setNotes(notes.concat(note))
    }
    const listItems = notes.map((note) =>
  <li>{note}</li>
)
    
   
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="note"></input>
            <button onSubmit>New note</button>
        </form>


        <ul>{listItems}</ul>
    </div>
}