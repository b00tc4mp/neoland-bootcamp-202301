function App() {
    const [items, setItems] = React.useState([])
    const [itemShown, setItemShown] = React.useState()
    const [view, setView] = React.useState('search')

    const handleSearch = event => {
        event.preventDefault()

        const query = event.target.query.value

        searchCocktails(query, results => setItems(results))
    }

    const hadleDrinkClick = id => {
        retrieveCocktail(id, result => {
            setItemShown(result)

            setView('drink')
        })
    }

    const handleOnClick = event => {
        event.preventDefault()
        setView('search')
    }

    return <div>
        {view === 'search' && <div>
            <div className="flex justify-center">
                <form className='block justify-center w-1/2 border m-2 border-gray-400 rounded-md' onSubmit={handleSearch}>
                    <input className='h-fit p-3 w-3/4 bg-white focus:outline-none focus:bg-gray-200 rounded-md' type='search' name='query'></input>
                    <button className="m-1 p-2 text-gray-400" type='submit'> | Search</button>
                </form>
            </div>
            <div className="flex ">
                <ul className="flex flex-wrap justify-center h-40 m-4">{items.map(item =>
                    <li className="border-2 rounded m-2 p-2 cursor-pointer" key={item.idDrink} onClick={() => hadleDrinkClick(item.idDrink)}>
                        <img className="h-40 rounded" src={item.strDrinkThumb} />
                        <h2 className="text-center uppercase text-sm overflow">{item.strDrink}</h2>
                    </li>)}
                </ul>
            </div>
        </div>}

        {view === 'drink' && <div onClick={handleOnClick} className="m-20 bg-gray-200 flex justify-center">
            <ul className="w-96 p-6 border gap-4 cursor-pointer">
                <li className="flex flex-col items-center w-50%">
                    <img className="h-80" src={itemShown.strDrinkThumb} />
                    <div className="flex flex-col justify-start">
                        <h2 className="text-center uppercase font-bold overflow">{itemShown.strDrink}</h2>
                        <br></br>
                        <p className="font-bold">Type of drink:</p>
                        <p className="px-4">{itemShown.strAlcoholic}</p>
                        <br></br>
                        <p className="font-bold">Ingredients:</p>
                        <ul className="flex flex-col justify-start">{itemShown.ingredients.map(ingredient => <li className="px-4">{ingredient}</li>)}</ul>
                        <br></br>
                        <p className="font-bold">Instructions: </p>
                        <p className="px-4">{itemShown.strInstructions}</p>
                    </div>
                </li>
            </ul>
        </div>}
    </div>
}