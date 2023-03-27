import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import retrieveNanny from '../logic/retrieve-nanny'
// import toggleFavNanny from '../logic/toogle-fav-nanny'
import Container from '../library/Container'
// import { StarIcon, } from '@heroicons/react/24/solid'
// import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'



function NannyProfile() {
    console.log('NannyProfile -> render')

    const [nanny, setNanny] = useState()
    const { nannyId } = useParams()

   
    useEffect(() => {
    
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
    }, [])

    // const handleToggleFavNanny = event => {
    //     try {
    //         const nannyId = event.currentTarget.id
    //         toggleFavNanny(sessionStorage.token, nannyId, error => {
    //             if (error) {
    //                 alert(error.message)

    //                 return
    //             }

    //             loadList()


    //         })
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }


    return <Container>
        {/* <button className="flex flex-row" id={nanny.id} onClick={handleToggleFavNanny}>{

            nanny.fav ? <StarIcon className="h-5 w-5 text-[#fb923c]" />
                :
                <StarIconOutline className="h-5 w-5 text-[#fb923c]" />}</button> */}
        {nanny && <div className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] mb-10" key={nanny.id} id={nanny.id} >
            <div className='sm:'>
                <img className="sm:w-25 " src=
                    {nanny.photo} alt="foto" />
            </div>
            <strong className='pt-1'>{nanny.user.name}</strong>
            <p className='pt-1'>City: {nanny.city}</p>
            <p className='pt-1'>Description: {nanny.description}</p>
            <p className='pt-1'>Experience: {nanny.experience}</p>
            <p className='pt-1'>Price: {nanny.price}€</p>
            <p className='pt-1'>Date of birth: {nanny.dateOfBirth ? nanny.dateOfBirth.slice(0, 10) : ''}</p>
            <ul className='pt-1'>Availability : {nanny.availabilities.map(availabity => <li key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
            <p className='pt-1'> Extras: {nanny.extras}</p>

        </div>}


    </Container>
}


export default NannyProfile