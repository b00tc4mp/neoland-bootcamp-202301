import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import retrieveParent from '../logic/retrieve-parent'
import Container from '../library/Container'


function ParentProfile() {
    console.log('NannyProfile -> render')
   
    const [parent, setParent] = useState()
    const {parentId} = useParams()
   

    useEffect(() => {

        try {
        retrieveParent(sessionStorage.token, parentId, (error, parent)=>{
            if (error) {
                alert(error)
                return
            } 
            
            setParent(parent)
        })
            
        } catch (error) {
            alert(error.message)
        }
          
    }, [])

    return <Container>
           {parent &&  <div className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] mb-10" key={parent.id} id={parent.id} >
           <div>
                <img className="sm:" src=
                    {parent.photo} />
            </div>

            <strong>{parent.user.name}</strong>
            <p>City: {parent.city}</p>
             <p>Description: {parent.description}</p>
             <ul>Kids : {parent.kids.map(kid => <li key={kid.id}>{kid.name}, {kid.dateOfBirth.slice(0,10)}</li>)}</ul>
            <ul>Availability : {parent.availabilities.map(availabity => <li key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
            
             <p>Extras: {parent.extras}</p> 

        </div>}
        

    </Container>
}


export default ParentProfile