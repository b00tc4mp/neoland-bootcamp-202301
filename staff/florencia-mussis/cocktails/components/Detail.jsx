function Detail({ itemId }) {
    console.log('Detail -> render')

    const [item, setItem] = React.useState()


    React.useEffect(() => { //se usa para cosas asincronas que no bloquean, primero se pinta vacio y cuando reciba el cocktail pintara el detalle
        retrieveCocktail(itemId, result => { //busca el cocktail en la api, recibe el cocktail, lo guarda en result y lo setea en state, entonces repinta
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