function App() {
    const [items, setItems] = React.useState([])
    const [itemShown, setItemShown] = React.useState()
    const [view, setView] = React.useState('search')

    const handleSearch = event => {
        event.preventDefault()

        const query = event.target.query.value

        searchCocktails(query, results => setItems(results))
        setView('search')
    }
    const handleDrinkClick = id => {

        retrieveCocktail(id, result => {
            setItemShown(result)
            setView('drink')
        })

    }

    return <div>
        <form onSubmit={handleSearch}>
                <input type="search" name="query" />
                <button type="submit">Drunk</button>
            </form>
        
        {view === 'search' && <div>
            {/* <form onSubmit={handleSearch}>
                <input type="search" name="query" />
                <button type="submit">Drunk</button>
            </form> */}
            <ul>{items.map(item =>
                <li key={item.idDrink} onClick={() => handleDrinkClick(item.idDrink)}>
                    <img src={item.strDrinkThumb} />
                    <h2>{item.strDrink}</h2>
                </li>)}
            </ul>

        </div>}

        {view === 'drink' && <div>
     
            <ul>
                <li>
                    <img src={itemShown.strDrinkThumb} />
                    <h2>{itemShown.strDrink}</h2>
                    <p>Alcohol:{itemShown.strAlcoholic}</p>
                    <p>Ingredients:</p>
                    <ul>{itemShown.ingredients.map(ingredient => <li>{ingredient}</li>)}
                    </ul>
                    <p>Instructions:{itemShown.strInstructions}</p>
                </li>
            </ul>

        </div>
        }

    </div >
}