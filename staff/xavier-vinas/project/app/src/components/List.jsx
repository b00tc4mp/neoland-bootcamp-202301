import { useState, useEffect, useContext } from 'react'
import Container from '../library/Container'
import Item from './Item'
import Context from '../Context'
import retrieveAuctions from '../logic/retrieve-auctions'


function List({ listUpdateStamp }) {
 
    const { alert } = useContext(Context)

    const [auctions, setAuctions] = useState([])



    const loadList = () => {

        try {
            retrieveAuctions(sessionStorage.token)
                .then(auctions => {
                    setAuctions(auctions.reverse())

                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)


        }
    }

    //     try {
    //         retrieveAuctions(sessionStorage.token,  (error, auctions) => {
    //             if (error) {
    //                 alert(error.message)

    //                 return
    //             }

    //             setAuctions(auctions.reverse())
    //         })
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    useEffect(() => {
        loadList()
    }, [listUpdateStamp])


    return <Container TagName="ul" className="sm: ">
        {auctions.map(auction => <Item key={auction.id} element={auction} />)}
    </Container>
}

export default List