import { useState, useEffect, useContext } from 'react'
import retrieveNannies from '../logic/retrieve-nannies'
import Container from '../library/Container'
import Context from '../Context'



function NanniesList({listUpdateStamp}) {
    const [nannies, setNannies] = useState([])
    const { alert } = useContext(Context)

  


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

    return <Container TagName="ul" className="gap-4 py-10 ">

        {nannies.map(nanny => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#6b7280]" key={nanny.id} data-id={nanny}>
            <strong>{nanny.user.name}</strong>
            <p>{nanny.city}</p>
            <p>{nanny.description}</p>
            <p>{nanny.extras}</p>
        </li>
        )}
    </Container>
}

export default NanniesList