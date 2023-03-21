import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import Container from "../library/Container"
import Context from '../Context'
import retrieveAuction from "../logic/retrieve-auction"
import Button from "../library/Button"
import BidList from "./BidList"


function AuctionDetail() {

    const { auctionId } = useParams()

    const { alert } = useContext(Context)

    const [auction, setAuction] = useState([])

    


    const loadAuction = () => {
        try {
            retrieveAuction(sessionStorage.token, auctionId, (error, auction) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAuction(auction)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadAuction()
    }, [])

    const handleToggleBid = event => { 
        event.preventDefault()


    }



    return <Container className="" TagName="ul">
        <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-medium mr-4">{auction.title}</h2>
        </div>
        <img className="w-full h-64 object-cover mb-2" src={auction.photo} alt={auction.title} />
        <div>
            <p>{auction.description}</p>
            
        </div>
        <Container>
        <div className="flex justify-between items-end gap-20">
            <p>Bid Rate: {auction.bidRate}</p>
            <p> Price: {auction.price}</p>
        </div>
        <div className="">
            <p>End date: {auction.endDate}</p>
            <p>Start date: {auction.startDate}</p>
        </div>
        </Container>

        <Container>
            <BidList/>
        </Container>

        <Container type='form' onSubmit={handleToggleBid}>
            <input className="px-4 py-2 rounded-full text-gray-900 bg-gray-300 focus:outline-none focus:shadow-outline" type='number'  />
        <Button type='submit'>bid</Button>

        </Container>
    </Container>




}
export default AuctionDetail