function App(){
console.log('App -> render')
const [items, setItems]= React.useState([])
const handleSearch= event =>{
    event.preventDefault()

    const query=event.target.query.value

    searchGiphy(query, results =>setItems(results))
}

return<div>
    <form className='form-class flex flex-col items-center justify-center mt-20' onSubmit={handleSearch}>
        <input className="border-double border-2 rounded-full border-orange-500 w-[20ch] m-4 text-center p-3 hover:bg-orange-100 focus:outline-none" type="search" name="query" />
        <button className="button border-2 border-orange-500 bg-orange-200 p-2 rounded-lg shadow-lg" type="submit">Search</button>
    </form>
    {!!items.length && 
    <ul className='grid grid-cols-3 md:grid-cols-5 grid-rows-8 md:grid-rows-5 p-4 gap-8 position-fixed'>
        {items.map(item => <li key={item.id}><img className="giphy-image rounded shadow-lg w-[250px] h-[250px]" src={item.images.original.url}/></li>)}
        </ul>}
</div>
}