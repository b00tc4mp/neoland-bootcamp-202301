function List({ items, onItemClick }) {
    return <ul>{items.map(item =>
        <li key={item.idDrink} data-id={item.idDrink} className="cursor-pointer p-5 bg-[red] m-5" onClick={onItemClick}>
            <h2>{item.strDrink}</h2>
            <img src={item.strDrinkThumb} />
        </li>
    )}</ul>
}