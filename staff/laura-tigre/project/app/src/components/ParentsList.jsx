import { useState, useEffect, useContext } from 'react'
import retrieveParents from '../logic/retrieve-parents'

import Container from '../library/Container'
import Context from '../Context'
import extractUserId from '../utils/extractUserId'



function ParentsList({ listUpdateStamp }) {

    const [parents, setParents] = useState([])
    

    const { alert } = useContext(Context)
    const userId = extractUserId(sessionStorage.token)
  

    const loadList = () => {



        try {
            retrieveParents(sessionStorage.token, (error, parents) => {
                if (error) {
                    alert(error)
                    return
                }
                setParents(parents.reverse())
            })
        } catch (error) {
            alert(error.message)
        }

    }




    useEffect(() => {
        loadList()
      
    }, [listUpdateStamp])

    return <Container TagName="ul" className="gap-4 py-10 ">

       {parents.map(parent => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#6b7280]" key={parent.id} data-id={parent}>
            <strong>{parent.user.name}</strong>
            <p>{parent.city}</p>
            <p>{parent.description}</p>
            <p>{parent.extras}</p>
        </li>
        )}
        
    </Container>
}

export default ParentsList