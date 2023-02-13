function App() {
    console.log('App -> render')

    const [view, setView] = React.useState('list')
    const [query, setQuery] = React.useState()
    const [itemId, setItemId] = React.useState()


    const handleQuery = query => {
        setQuery(query)
        setView('list')
    }

    const handleDetail = itemId => {
        setItemId(itemId)
        setView('detail')
    }

    return <div>
        <Search onQuery={handleQuery}/>

        {view === 'list' && <List query={query} onItemClick={handleDetail}/>}

        {view === 'detail' && <Detail itemId={itemId} />}
   
    </div>
}