function List({ query, onItemClick }) {
    console.log('List -> render')

    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        searchCocktails(query, results => {
            setItems(results)
        })
    }, [query])

    const handleItemClick = event => {
        const itemId = event.currentTarget.dataset.id

        onItemClick(itemId)
    }

    return <div>
        {items && <ul>{items.map(item =>
            <li key={item.idDrink} data-id={item.idDrink} className="cursor-pointer p-5 bg-[red] m-5" onClick={handleItemClick}>
                <h2>{item.strDrink}</h2>
                <img src={item.strDrinkThumb} />
            </li>
        )}</ul>}
    </div>
}