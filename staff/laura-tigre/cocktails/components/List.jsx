function List({query, onItemClick}){
  console.log('List -> render')

  const [items, setItems]= React.useState([])


     React.useEffect(()=>{
        searchCocktails(query, results =>{
             setItems(results)
     })
    }, [query])

    const handleItemClick = event => {
        const itemId = event.currentTarget.dataset.id

        onItemClick(itemId)
    }
    return <div>

    {items && <ul className="grid grid-cols-3 p-4 gap-8">{items.map(item =>
        <li className="cursor-pointer" key={item.idDrink} data-id={item.idDrink} onClick={handleItemClick}>
            <img className="giphy-image rounded shadow-lg w-[250px] h-[250px]"  src={item.strDrinkThumb} />
            <h2 className="text-xl ">🍹 {item.strDrink} 🍹</h2>
        </li>)}
    </ul>}
    </div>
}