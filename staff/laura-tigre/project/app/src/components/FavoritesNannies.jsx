import { useState, useEffect, useContext } from 'react'
import retrieveFavNannies from '../logic/retrieve-fav-nannies'
import Container from '../library/Container'
import toggleFavNanny from '../logic/toogle-fav-nanny'
import Context from '../Context'
import { Link } from 'react-router-dom'
import { StarIcon, } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'



function FavoritesNannies({ listUpdateStamp }) {

    const { alert } = useContext(Context)

    const [nannies, setNannies] = useState([])

    const loadList = () => {

        try {
            retrieveFavNannies(sessionStorage.token, (error, nannies) => {
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

    useEffect(() => {
        loadList()


    }, [listUpdateStamp])

    const handleToggleFavNanny = event => {
        try {
            const nannyId = event.currentTarget.id
            toggleFavNanny(sessionStorage.token, nannyId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                loadList()


            })
        } catch (error) {
            alert(error.message)
        }
    }



    return <Container TagName="ul" className="gap-4 py-10 mb-10">
        {nannies.map(nanny => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1]" key={nanny.id} id={nanny.id} >
        <div className="flex flex-row justify-between">
                <div>
                    <img className='w-20 h-20' src=
                        {nanny.photo} />
                </div>
                <button className="flex flex-row" id={nanny.id} onClick={handleToggleFavNanny}>{

                    nanny.fav ? <StarIcon className="h-5 w-5 text-[#fb923c]" />
                        :
                        <StarIconOutline className="h-5 w-5 text-[#fb923c]" />}</button>
            </div>

            <Link to={`/nannies/${nanny.id}`}>
                <strong className="w-[28ch] text-sm text-left">{nanny.name}</strong>
            </Link>
            <ul className='pt-1 text-sm text-left'>Availability : {nanny.availabilities.map(availabity => <li key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>

            <p className='text-sm text-left'>Experience: {nanny.experience} years</p>
            <p className='text-sm text-left'>Email: {nanny.email}</p>
        </li>
        )}

    </Container>


}




export default FavoritesNannies