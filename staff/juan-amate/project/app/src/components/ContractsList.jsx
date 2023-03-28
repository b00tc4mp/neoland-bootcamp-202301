import { useState, useEffect, useContext } from 'react'
import retrieveContracts from '../logic/retrieve-contracts'
import Container from '../library/Container'
import Context from '../Context'
import ItemContract from './ItemContract'

function Contract() {
    console.log('Contract -> render')

    const { alert } = useContext(Context)


    const [contracts, setContracts] = useState([])

    const loadDetailContract = () => {
        try {
            retrieveContracts(sessionStorage.token, (error, contracts) => {
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

    const currentDate = new Date()

    const actualContracts = []
    const expiredContracts = []

    for (let i = 0; i < contracts.length; i++) {
        const contract = contracts[i]

        if (contract.eventDate.getTime() >= currentDate.getTime())
            actualContracts.push(contract)
        else
            expiredContracts.push(contract)
    }

    actualContracts.sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime())

    expiredContracts.sort((a, b) => b.eventDate.getTime() - a.eventDate.getTime())

    // const orderedContracts = contracts.concat(expiredContracts)

    return <>
        {!!actualContracts.length && <>
            <h2 className='font-medium text-2xl py-10'>Actual contracts</h2>
            <Container TagName='ul'>
                {actualContracts.map(contract => <ItemContract key={contract.id} element={contract} />)}
            </Container>
        </>}

        {!!expiredContracts.length && <>
            <h2 className='font-medium text-2xl py-10'>Expired contracts</h2>
            <Container TagName='ul'>
                {expiredContracts.map(expiredContract => <ItemContract key={expiredContract.id} element={expiredContract} />)}
            </Container>
        </>}
    </>
}

export default Contract
