import { useState, useEffect, useContext } from 'react'
import retrieveNannies from '../logic/retrieve-nannies'
import toggleFavNanny from '../logic/toogle-fav-nanny'
import Container from '../library/Container'
import Context from '../Context'
import { Link} from 'react-router-dom'
import extractUserId from '../utils/extractUserId'
import { StarIcon, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'





function NanniesList({listUpdateStamp, ontogglefav}) {
    console.log('NanniesList -> render')
    const [nannies, setNannies] = useState([])
    const { alert } = useContext(Context)
    const [user, setUser] = useState({})
    
   
    const userId = extractUserId(sessionStorage.token)
   
   
   
  


    const loadList = () => {

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

    const handleToggleFav = event => {
        try {
            const nannyId = event.currentTarget.id
            toggleFavNanny(sessionStorage.token,nannyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

               
                setNannies(nannies.reverse())
             
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <Container TagName="ul" className="gap-4 py-10 ">

        {nannies.map(nanny => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#6b7280]" key={nanny.id} id={nanny.id}>
        <button className="flex justify-center" id={nanny.id} onClick={handleToggleFav}>{
                user.favs && user.favs.includes(nanny.id) ?<StarIcon className="h-5 w-5 text-[gold]" />
                    :
                    <StarIconOutline className="h-5 w-5 text-black-500" />}</button>

        <Link to={`/nannies/${nanny.id}`}>
            <strong className="w-[28ch] text-sm text-left">{nanny.user.name}</strong>
            </Link>
            <p>{nanny.city}</p>
            <p>{nanny.description}</p>
            <p>{nanny.extras}</p>
        </li>
        )}
    </Container>
}

export default NanniesList