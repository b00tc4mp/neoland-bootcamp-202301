import { useState, useEffect, useContext } from 'react'
import retrieveMyContracts from '../logic/retrieve-my-contracts'
import Container from '../library/Container'
import Context from '../Context'
import ItemContract from './ItemContract'

function Contract() {
    console.log('Contract -> render')

    const { alert } = useContext(Context)


    const [contracts, setContracts] = useState([])

    const loadDetailContract = () => {
        try {
            retrieveMyContracts(sessionStorage.token, (error, contracts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setContracts(contracts)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadDetailContract()
    }, [])

    return <Container TagName='ul'>
        {contracts.map(contract => <ItemContract key={contract.id} element={contract} />)}
    </Container>
}

export default Contract
