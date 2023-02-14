function App() {
    console.log('App -> render')
    // const [view, setView] = React.useState('list')
    // const [items, setItems] = React.useState([])
    // const [item, setItem] = React.useState()
    const [view, setView] = React.useState('list')
    const[query, setQuery]= React.useState()
    const [itemId, setItemId] = React.useState()
    // const handleSearch = event => {
    //     event.preventDefault()

    //     const query = event.target.query.value

    //     searchCocktails(query, results => {
    //         setItems(results)
    //         setView('list')
    //     })
    // }
    // sustituimos la handleSearch por la query ya que lo que buscamos es el resultado de la query que es la busqueda en el momento y por lo tanto la vista
    const handleQuery = query => {
        setQuery(query) // seteamos el estado de query y se lo actualizaos a la query del input
        setView('list')
    }

    // const handleDetail = event => {
    //     retrieveCocktail(event.currentTarget.dataset.id, result => {
    //         setItem(result)
    //         setView('detail')
    //     })
    // }

    const handleDetail = itemId => {

            setItemId(itemId)
            setView('detail')
       

    }

    return <div>
  
        < Search onQuery={handleQuery} /> {/**onFormSubmit={handleSearch} envio callback */}
    
        {view === 'list' && <List query={query} onItemClick={handleDetail}/>}
        {/* && !!items.length && <List items={items} onItemClick={handleDetail} />} */}
         

        {view === 'detail' && <Detail itemId={itemId} />}
        {/* && <Detail item={item} />} */}
    

    </div >
}