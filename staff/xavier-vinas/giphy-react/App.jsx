function App() {
    console.log('App -> render')

    const [items, setItems] = React.useState([])

    const handleSearch = event => {
        event.preventDefault()

        const query = event.target.query.value

        searchGiphy(query, results => setItems(results))
    }

    return <div bg-black>
        <form className=" border-2 p-3 flex justify-center gap-2" onSubmit={handleSearch}>
            <input className="border-2 rounded-full" type="search" name="query" />
            <button className="border-2 p-2 rounded-full" type="submit">Search</button>
        </form>
        {!!items.length && <ul className="grid grid-cols-4 gap-2 w-4/5	h-4/5 ">{items.map(item => <li className="" key={item.id}><img src={item.images.original.url} /></li>)}</ul>}
    </div>
}