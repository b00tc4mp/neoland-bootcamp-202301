import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import retrieveNanny from '../logic/retrieve-nanny'
import toggleFavNanny from '../logic/toogle-fav-nanny'
import Container from '../library/Container'
import { Link } from 'react-router-dom'
import { StarIcon,ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'



function NannyProfile() {
    console.log('NannyProfile -> render')

    const [nanny, setNanny] = useState()
    const { nannyId } = useParams()

    const loadList = () => {

        try {
            retrieveNanny(sessionStorage.token, nannyId, (error, nanny) => {
                if (error) {
                    alert(error)
                    return
                }

                setNanny(nanny)
            })

        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadList()
    }, [])

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


    return <Container>

        {nanny && <div className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] mb-20" key={nanny.id} id={nanny.id} >
            <div className="flex flex-row justify-end">
            <Link to={'/chat'}><ChatBubbleLeftRightIcon className="h-5 w-5 text-[#fb923c] mr-1" /></Link>
                <button id={nanny.id} onClick={handleToggleFavNanny}>{
                    nanny.fav ? <StarIcon className="h-5 w-5 text-[#fb923c]" />
                        :
                        <StarIconOutline className="h-5 w-5 text-[#fb923c]" />}</button>
            </div>
            <div className='sm:'>
                <img className="sm:w-25 " src=
                    {nanny.photo} alt="foto" />
            </div>
            <p className='pt-1 text-lg'>{nanny.user.name}</p>
            <p className='pt-1 text-[#fb923c]'>City:<span className='text-black'> {nanny.city}</span> </p>
            <p className='pt-1 text-[#fb923c]'>Description: <span className='text-black'>{nanny.description}</span></p>
            <p className='pt-1 text-[#fb923c]'>Experience: <span className='text-black'>{nanny.experience}</span></p>
            <p className='pt-1 text-[#fb923c]'>Price: <span className='text-black'>{nanny.price}€</span></p>
            <p className='pt-1 text-[#fb923c]'>Date of birth: <span className='text-black'>{nanny.dateOfBirth ? nanny.dateOfBirth.slice(0, 10) : ''} </span></p>
            <ul className='pt-1 text-[#fb923c]'>Availability : {nanny.availabilities.map(availabity => <li className='text-black list-disc ml-2' key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
            <p className='pt-1 text-[#fb923c]'> Extras: <span className='text-black'>{nanny.extras}</span></p>
            

        </div>}


    </Container>
}


export default NannyProfile