import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import retrieveNanny from '../logic/retrieve-nanny'
import Container from '../library/Container'


function NannyProfile() {
    console.log('NannyProfile -> render')
   
    const [nanny, setNanny] = useState()
    const {nannyId} = useParams()
   

    useEffect(() => {

        try {
        retrieveNanny(sessionStorage.token, nannyId, (error, nanny)=>{
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

    return <Container>
           {nanny &&  <div className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] mb-10" key={nanny.id} id={nanny.id} >
            <div className='sm:'>
                <img className="sm:w-25 " src=
            {nanny.photo} alt="foto"/>
        </div>
            <strong className='pt-1'>{nanny.user.name}</strong>
            <p className='pt-1'>City: {nanny.city}</p>
             <p className='pt-1'>Description: {nanny.description}</p>
            <p className='pt-1'>Experience: {nanny.experience}</p>
            <p className='pt-1'>Price: {nanny.price}€</p>
             <p className='pt-1'>Date of birth: {nanny.dateOfBirth ? nanny.dateOfBirth.slice(0,10):''}</p>
            <ul className='pt-1'>Availability : {nanny.availabilities.map(availabity => <li key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
             <p className='pt-1'> Extras: {nanny.extras}</p> 

        </div>}
        

    </Container>
}


export default NannyProfile