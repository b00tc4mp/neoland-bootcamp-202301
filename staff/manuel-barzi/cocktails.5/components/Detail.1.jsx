function Detail(props) {
    const item = props.item

    return <div>
        <h1>{item.strDrink}</h1>
        <img src={item.strDrinkThumb} />
        <p>{item.strAlcoholic}</p>
        <p>{item.strCategory}</p>
        <p>{item.strGlass}</p>
        <p>{item.strInstructions}</p>
    </div>
}