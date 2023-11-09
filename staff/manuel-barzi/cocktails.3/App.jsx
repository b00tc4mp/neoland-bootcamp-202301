function App() {
    console.log('App -> render')

    const [view, setView] = React.useState('list')
    const [items, setItems] = React.useState([])
    const [item, setItem] = React.useState()

    const handleSearch = event => {
        event.preventDefault()

        const query = event.target.query.value

        searchCocktails(query, results => {
            setItems(results)
            setView('list')
        })
    }

    const handleDetail = event => {
        retrieveCocktail(event.currentTarget.dataset.id, result => {
            setItem(result)
            setView('detail')
        })
    }

    return <div>
        <form className="border-2 p-2 flex justify-center gap-2" onSubmit={handleSearch}>
            <input className="border-2" type="search" name="query" />
            <button className="border-2" type="submit">Search</button>
        </form>

        {view === 'list' && !!items.length && <ul>{items.map(item =>
            <li key={item.idDrink} data-id={item.idDrink} className="cursor-pointer p-5 bg-[red] m-5" onClick={handleDetail}>
                <h2>{item.strDrink}</h2>
                <img src={item.strDrinkThumb} />
            </li>
        )}</ul>}

        {view === 'detail' && <div>
            <h1>{item.strDrink}</h1>
            <img src={item.strDrinkThumb} />
            <p>{item.strAlcoholic}</p>
            <p>{item.strCategory}</p>
            <p>{item.strGlass}</p>
            <p>{item.strInstructions}</p>
        </div>}
    </div>
}