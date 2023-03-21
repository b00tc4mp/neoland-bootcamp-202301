import retrieveAuctionBid from "../logic/retrieve-auction-bid"
import { useEffect, useState, useContext } from "react"
import { useParams ,  } from "react-router-dom"
import Context from '../Context'
import Container from "../library/Container"
function BidList() {
    const { auctionId } = useParams()

    const { alert } = useContext(Context)

    const [bids, setBids] = useState([])

    const loadAuction = () => {
     
        try {
            retrieveAuctionBid(auctionId , sessionStorage.token,  (error, bids) => {
                if (error) {
                    alert(error.message)

                    return
                }
               
                setBids(bids)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadAuction()
    }, [])


    return <Container className="" TagName="ul">
        {bids.map(bid => {
            return <li key={bid.id}>
                <div>
                    <p>Date: {bid.date}</p>
                    <p>amount: {bid.amount}</p>
            </div>
            </li>
          
        }
            
    )}
        </Container>
}
export default BidList