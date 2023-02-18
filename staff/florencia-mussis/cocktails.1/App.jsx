function App() {
    const [items, setItems] = React.useState([])
    const [itemShown, setItemShown] = React.useState()
    const [view, setView] = React.useState('search')

    const handleSearch = event => {
        event.preventDefault()
        const query = event.target.query.value

        searchCocktails(query, results => setItems(results)) //no se ejecuta aca, se envia a la logica
    }

    const handleDrinkClick = id => {
        // lanzar una llamada para recuperar de la api la información del drink en particular
        // asíncrona
        retrieveCocktail(id, result => {
            setItemShown(result)

            setView("drink")
        })
    }

    return <div>
        <form onSubmit={handleSearch}>
            <input type="search" name="query"></input>
            <button type="submit">Drunk</button>
        </form>
        {view === "search" && <div>
            <ul>{items.map(item =>
                <li key={item.idDrink} onClick={() => handleDrinkClick(item.idDrink)}>
                    <img src={item.strDrinkThumb} />
                    <h2>{item.strDrink}</h2>
                </li>)}
            </ul>
        </div>}
        {view === "drink" && <div>
            <ul>
                <li>
                    <img src={itemShown.strDrinkThumb} />
                    <h2>{itemShown.strDrink}</h2>
                    <p>Alcohol:{itemShown.strAlcoholic}</p>
                    <p>ingredients:</p>
                    <ul>{itemShown.ingredients.map(ingredient => <li>{ingredient}</li>)}
                    </ul>
                    <p>Instructions:{itemShown.strInstructions}</p>
                </li>
            </ul>
        </div>}
    </div>
}