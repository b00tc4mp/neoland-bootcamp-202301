import { useState, useEffect, useContext } from 'react'
import retrieveNannies from '../logic/retrieve-nannies'
import Context from '../Context'
import {Link} from 'react-router-dom'


function SearchNannies({listUpdateStamp }){
    const[search, setSearch]= useState()
    const[nannies, setNannies]= useState([])
    const {alert} = useContext(Context)
    const [nanny, setNanny]= useState()


    const loadList= () => {
         try {
            retrieveNannies(sessionStorage.token, (error, nannies) => {
                if (error) {
                    alert(error)
                    return
                }
                setNannies(nannies.reverse())
            })
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        loadList()

    }, [listUpdateStamp])

    const handleChange = (event) => {

        setSearch(event.target.value)
    }
    const filteredNannies = nannies.filter(nanny => {
        if(nanny.price.filter(search.price)) 
        return true
     
    })


    



    





    return <div>
        <form>
            <label htmlFor="search">Search Price</label>
            <input type='number' id={nanny.id} value={search} onChange={handleChange}/>
            <Link to={`/nannies/${nanny.id}`}><strong className="w-[28ch] text-sm text-left">{nanny.user.name}</strong>
            </Link>
        </form>
        <div>
        {filteredNannies}
      </div>

    </div>


}
export default SearchNannies