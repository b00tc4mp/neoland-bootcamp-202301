function Search({ onQuery }) {
    console.log('Search -> render')

    const handleSubmit = event => {
        event.preventDefault()

        const query = event.target.query.value //recoge el valor de la query y lo envia a la callback de abajo

        onQuery(query) //envio la query a  App- search, me lleva a la app
    }

    return <form className="border-2 p-2 flex justify-center gap-2" onSubmit={handleSubmit}>
        <input className="border-2" type="search" name="query" />
        <button className="border-2" type="submit">Search</button>
    </form>
}