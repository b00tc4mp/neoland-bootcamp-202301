import { useEffect, useState, useContext } from "react"
import Container from "../library/Container"
import Context from '../Context'
import retrieveMyAuctions from "../logic/retrieve-my-auctions"
import Item from "./Item"


function MyAuctions({ listUpdateStamp }) {


    const { alert } = useContext(Context)

    const [myAuctions, setmyAuctions] = useState([])


    const loadAuction = () => {
        try {
            retrieveMyAuctions(sessionStorage.token)
                .then(myAuctions => {
                    setmyAuctions(myAuctions)

                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)


        }


    }
    //     try {
    //         retrieveMyAuctions(sessionStorage.token, (error, myAuctions) => {
    //             if (error) {
    //                 alert(error.message)

    //                 return
    //             }

    //             setmyAuctions(myAuctions)
    //         })
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    useEffect(() => {
        loadAuction()
    }, [listUpdateStamp])



    return <Container TagName="ul" className="sm: h-full flex flex-col py-4 px-6 my-4">
        {myAuctions.map(auction => <Item key={auction.id} element={auction} />)}
    </Container>
}


export default MyAuctions