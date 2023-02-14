function Detail({ itemId }) {
    console.log('Detail -> render')

    const [item, setItem] = React.useState()

    React.useEffect(() => {
        retrieveCocktail(itemId, result => {
            setItem(result)
        })
    }, [])

    return <div>
        {item && <div>
            <img src={item.strDrinkThumb}/>
            <h1>{item.strDrink}</h1>
            <p>{item.strAlcoholic}</p>
            <p>{item.strCategory}</p>
            <p>{item.strGlass}</p>
            <p>{item.strInstructions}</p>
        </div>}
    </div>
}