function App() {
    console.log('App -> render')

    const [items, setItems] = React.useState([])

    const handleSearch = event => {
        event.preventDefault()

        const query = event.target.query.value

        searchGiphy(query, results => setItems(results))
    }

    return <div>
        <form className="border p-2 flex justify-center gap-2" onSubmit={handleSearch}>
            <input className="border-2" type='search' name='query'></input>
            <button className="border-2" type='submit'>Search</button>
        </form>
        {!!items.length && <ul className="h-40 m-2 flex flex-wrap justify-center">{items.map(item => <li className="m-2 p-2 border border-gray-500 rounded-md" key={item.id}><img src={item.images.original.url} /></li>)}</ul>}
    </div> 
}