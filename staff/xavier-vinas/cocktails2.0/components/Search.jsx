function Search({ onQuery }) {
    

    const handleSubmit = event => {
        event.preventDefault()

        const query = event.target.query.value

        onQuery(query) // envio la query a app-Serach "view"
    }


    return <form className="" onSubmit={handleSubmit}>
        <input className="" type="search" name="query" />
        <button className="" type="submit">Search</button>
    </form>
}