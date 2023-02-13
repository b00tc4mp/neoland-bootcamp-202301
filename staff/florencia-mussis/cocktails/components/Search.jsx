function Search({ onQuery }) {
    console.log('Search -> render')

    const handleSubmit = event => {
        event.preventDefault()

        const query = event.target.query.value

        onQuery(query) //envio la query a  App- search

    }

    return <form className="border-2 p-2 flex justify-center gap-2" onSubmit={handleSubmit}>
        <input className="border-2" type="search" name="query" />
        <button className="border-2" type="submit">Search</button>
    </form>
}