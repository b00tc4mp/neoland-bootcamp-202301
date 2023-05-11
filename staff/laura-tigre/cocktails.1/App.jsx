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
        <form className='form-class flex flex-col items-center justify-center mt-20' onSubmit={handleSearch}>
                <input className="border-double border-2 rounded-full border-[#5b21b6] w-[20ch] m-4 text-center p-3 hover:bg-[#a78bfa] focus:outline-none visited:bg-[#a78bfa]" type="search" name="query" />
                <button className="button border-2 border-[#5b21b6] bg-[#a78bfa] p-3 rounded-lg" type="submit">Drunk</button>
            </form>
        
        {view === 'search' && <div>
            {/* <form onSubmit={handleSearch}>
                <input type="search" name="query" />
                <button type="submit">Drunk</button>
            </form> */}
            {!!items.length && <ul className="grid grid-cols-3 p-4 gap-8">{items.map(item =>
                <li className="cursor-pointer" key={item.idDrink} onClick={() => handleDrinkClick(item.idDrink)}>
                    <img className="giphy-image rounded shadow-lg w-[250px] h-[250px]"  src={item.strDrinkThumb} />
                    <h2 className="text-xl ">🍹 {item.strDrink} 🍹</h2>
                </li>)}
            </ul>}

        </div>}

        {view === 'drink' && <div className="flex flex-col items-center">
     
         <ul className="m-8">
                <li>
                    <div className="flex flex-col border-2 border-[#5b21b6] bg-[#c4b5fd] w-[60ch] p-4">
                    <img className="giphy-image rounded shadow-lg w-[250px] h-[250px]" src={itemShown.strDrinkThumb} />
                    <h2 className="text-3xl">{itemShown.strDrink}</h2>
                    <p> Alcohol: {itemShown.strAlcoholic}</p>
                    <p className="flex flex-row "> Ingredients: <ul className="flex flex-col list-disc m-5">{itemShown.ingredients.map(ingredient => <li>{ingredient}</li>)}
                    </ul></p>
                    <p>Instructions: {itemShown.strInstructions}</p>
                    </div>
                </li>
            </ul>

        </div>
        }

    </div >
}