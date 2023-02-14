function Detail({ itemId}) {
    console.log('Detail -> render')

    const [item, setItem] = React.useState()

    React.useEffect(() => {
        retrieveCocktail(itemId, result => {
            setItem(result)
        })
    }, [])

    return <div>
        {item && <div>
            <h1>{item.strDrink}</h1>
            <img src={item.strDrinkThumb} />
            <p>{item.strAlcoholic}</p>
            <p>{item.strCategory}</p>
            <p>{item.strGlass}</p>
            <p>{item.strInstructions}</p>
        </div>}
    </div>
}