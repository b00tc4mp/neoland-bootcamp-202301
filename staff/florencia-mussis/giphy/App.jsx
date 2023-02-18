function App() {
    console.log('App -> render')

    const [items, setItems] = React.useState([])

    const handleSearch = event => {
        event.preventDefault()

        const query = event.target.query.value

        searchGiphy(query, results => setItems(results))
    }

    return <div>
        <form className="border-2 p-2 flex justify-center gap-4 border-grey" onSubmit={handleSearch}>
            <input className="border-2 w-1/5" type="search" name="query" />
            <button className="border-2" type="submit">🔍</button>
        </form>
        {!!items.length && <ul className="flex flex-wrap gap-2 justify-center items-center">{items.map(item => <li key={item.id}><img src={item.images.original.url} /></li>)}</ul>}
    </div>
}

//!!items.lenght = al principio como no hicimos busqueda es cero y se imprime en pantalla entonces lo convertimos a booleano, cuando es 0 seria falso y no analizaria el && por lo tanto no pinta, si tiene valor es verdadero analizará el && y monta la ul. 
