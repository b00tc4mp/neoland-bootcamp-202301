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

    return <div className="flex ">
        {items && <ul className="flex flex-wrap justify-center h-40 m-4">{items.map(item =>
            <li className="border-2 rounded m-2 p-2 cursor-pointer" key={item.idDrink} data-id={item.idDrink} onClick={handleItemClick}>
                <img className="h-40 rounded" src={item.strDrinkThumb} />
                <h2 className="text-center uppercase text-sm overflow">{item.strDrink}</h2>
            </li>
        )}</ul>}
    </div>
}