function App() { //pinta los grandes componentes
    console.log('App -> render')

    const [view, setView] = React.useState('list')
    const [query, setQuery] = React.useState()
    const [itemId, setItemId] = React.useState()


    const handleQuery = query => { //recibe valor del input
        setQuery(query) // seteamos el estado de query y le actualizamos a la query del input
        setView('list') // la vista va a ser list
    }

    const handleDetail = itemId => { //recibe el itemId de List
        setItemId(itemId) //recibe el itemId de list y va a hacer el cambio de estado y repinta
        setView('detail')
    }

    return <div>
        <Search onQuery={handleQuery}/> {/*Se pinta siempre el formulario, le enviamos a Onquery la callback */}
        
        {view === 'list' && <List query={query} onItemClick={handleDetail}/>} {/* si la vista es list renderiza list, list recibe la query. List mediante handleDetail le pasa el id del elemtento en el cual clikeamos */} 

        {view === 'detail' && <Detail itemId={itemId} />} {/* si la vista es detail renderiza detail. */} 
   
    </div>
}