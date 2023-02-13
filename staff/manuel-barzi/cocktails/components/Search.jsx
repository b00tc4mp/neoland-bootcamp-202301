function Search({ onFormSubmit }) {
    return <form className="border-2 p-2 flex justify-center gap-2" onSubmit={onFormSubmit}>
        <input className="border-2" type="search" name="query" />
        <button className="border-2" type="submit">Search</button>
    </form>
}