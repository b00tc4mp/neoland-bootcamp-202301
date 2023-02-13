function Search({onQuery}){
    console.log('Search -> render')
  
    const handleSubmit = event => {
        event.preventDefault()

        const query = event.target.query.value
    
        onQuery(query)
    }
    return <form className='form-class flex flex-col items-center justify-center mt-20' onSubmit={handleSubmit}>
    <input className="border-double border-2 rounded-full border-[#5b21b6] w-[20ch] m-4 text-center p-3 hover:bg-[#a78bfa] focus:outline-none visited:bg-[#a78bfa]" type="search" name="query" />
    <button className="button border-2 border-[#5b21b6] bg-[#a78bfa] p-3 rounded-lg" type="submit">Drunk</button>
</form>

}