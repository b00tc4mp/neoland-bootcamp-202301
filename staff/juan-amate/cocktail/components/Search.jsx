function Search({ onQuery }) {
    console.log('Search -> render')

    const handleSubmit = event => {
        event.preventDefault()

        const query = event.target.query.value

        onQuery(query)
    }

    return <div className="flex justify-center">
        <form className='block justify-center w-1/2 border m-2 border-gray-400 rounded-md' onSubmit={handleSubmit}>
            <input className='h-fit p-3 w-3/4 bg-white focus:outline-none focus:bg-gray-200 rounded-md' type='search' name='query'></input>
            <button className="m-1 p-2 text-gray-400" type='submit'> | Search</button>
        </form>
    </div>
}