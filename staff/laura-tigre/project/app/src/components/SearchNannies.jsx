import { useState, useEffect, useContext } from 'react'
import retrieveNannies from '../logic/retrieve-nannies'
import Container from '../library/Container'
import Context from '../Context'
import { Link} from 'react-router-dom'


function SearchNannies(){

    const[seach, setSearch]= useState()



    return <div>
        <form>
            <label htmlFor="search">Search Price</label>
            <input type='number' id='search' value={search} onChange={handleChange}/>
        </form>
    

    </div>


}
export default SearchNannies