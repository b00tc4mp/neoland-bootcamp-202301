function App() {

    const [items, setItems] = React.useState([])

    const handleSearch = event => {
        event.preventDefault()

        const query = event.target.query.value

        searchFood(query, results => setItems(results)) // cual es el motivo de poner results?? llamamos a searchFood y le pasamos query (valor del input) y la funcion para q actulice el estado
    }

    return <div className="h-full flex flex-col items-center justify-center">
        <form className="border-2 h-16 w-2/6 m-8 rounded-lg p-2 flex justify-center items-center gap-4 border-grey" onSubmit={handleSearch}>
            <input className="border-2 w-2/5" type="search" name="query"/>
            <button className="border-2" type="submit">🔍</button>
        </form>

        <ul className="flex flex-wrap gap-2 justify-center items-center">{items.map(item =>
            <li className="flex flex-col flex-wrap gap-4 justify-center items-center" key={item.idMeal}>
                <h2>Food: {item.strMeal}</h2>
                <h4>Country: {item.strArea}</h4>
                <h4>Category: {item.strCategory}</h4>
                <img className="border-2 w-1/4 h-2/12 items-center" src={item.strMealThumb} />
                <h5 className="w-3/5">{item.strInstructions}</h5>
            </li>)}
        </ul>

    </div>
}