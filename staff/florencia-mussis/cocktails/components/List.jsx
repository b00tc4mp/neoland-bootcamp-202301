function List({ query, onItemClick }) {
    console.log('List -> render')

    const [items, setItems] = React.useState([]) //arranca el array vacio

    React.useEffect(() => {
        searchCocktails(query, results => {
            setItems(results)
        })
    }, [query]) // que pinte cuando tenga los resultados, es asincrono. Se ejecuta cuando se renderiza la pagina y cuando hay un cambio en query.


    const handleItemClick = event => {
        const itemId = event.currentTarget.dataset.id

        onItemClick(itemId)
    }

    return <div>
       <ul>{items.map(item =>
            <li key={item.idDrink} data-id={item.idDrink} className="cursor-pointer p-5 bg-[red] m-5" onClick={handleItemClick}>
                <h2>{item.strDrink}</h2>
                <img src={item.strDrinkThumb} />
            </li>
        )}</ul>
    </div>
}