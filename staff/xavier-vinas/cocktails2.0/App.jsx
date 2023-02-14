function App() {
    const [view, setView] = React.useState("list")
    const [query, setQuery] = React.useState()
    const [itemId, setItemId] = React.useState()

    const handleQuery = query => { // recibe el valor del input
        setQuery(query) // seteamos el estado de query y le actualizamos a la query del input
        setView("list") // la vista va a list 
    }

    const handleDetail = itemId => {
        setItemId(itemId)
        setView("detail")
    }

    return <div>
        <Search onQuery={handleQuery} />

        {view === 'list' && <List query={query} onItemClick={handleDetail} />} {/* si la vista es list renderiza list */}

        {view === 'detail' && <Detail itemId={itemId} />} {/* si la vista es detail renderiza detail  */}
    </div>
}
