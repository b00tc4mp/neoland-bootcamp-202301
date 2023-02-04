function Notes(){

    console.log('Notes -> render')

    const[notes, setNotes]= React.useState([])

    const handleSubmit =event =>{
        event.preventDefault()

        const note = event.target.note.value

        setNotes(notes.concat(note))


    }

  const listItems = notes.map((note) =>
   <li>{note}</li>)






    return <div style={{border:'4px dotted orange'}}>
        <form onSubmit={handleSubmit}>
            <input type="text" name="note" />
            <button onSubmit>Nueva nota</button>
        </form>

        <ul>{listItems}</ul>
    </div>
}