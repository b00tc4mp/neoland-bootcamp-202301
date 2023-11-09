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
        <Search onFormSubmit={handleSearch}/>

        {view === 'list' && !!items.length && <List items={items} onItemClick={handleDetail} />}

        {view === 'detail' && <Detail item={item} />}
    </div>
}