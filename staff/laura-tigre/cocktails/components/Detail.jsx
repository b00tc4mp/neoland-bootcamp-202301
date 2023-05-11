function Detail({ itemId }) { {/**props */}
    console.log('Detail-> render')
    // const item = props.item
    const [item, setItem] = React.useState()

React.useEffect(()=> {
    retrieveCocktail(itemId, result => {
        setItem(result)
    })
},[])// cuando ponemos corchetes vacios decimos que se pinte una sola vez

    return <div>
        {item && <div className="flex flex-col items-center">

            <ul className="m-8">
                <li>
                    <div className="flex flex-col border-2 border-[#5b21b6] bg-[#c4b5fd] w-[60ch] p-4">
                        <img className="giphy-image rounded shadow-lg w-[250px] h-[250px]" src={item.strDrinkThumb} />
                        <h2 className="text-3xl">{item.strDrink}</h2>
                        <p> Alcohol: {item.strAlcoholic}</p>
                        <p className="flex flex-row "> Ingredients: <ul className="flex flex-col list-disc m-5">{item.ingredients.map(ingredient => <li>{ingredient}</li>)}
                        </ul></p>
                        <p>Instructions: {item.strInstructions}</p>
                    </div>
                </li>
            </ul>
        </div>

        }
    </div>
}