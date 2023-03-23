import retrieveAuctionBid from "../logic/retrieve-auction-bid"
import { useEffect, useState, useContext } from "react"
import { useParams, } from "react-router-dom"
import Context from '../Context'
import Container from "../library/Container"
import bidAuction from "../logic/bid-auction"
import Button from "../library/Button"
function BidList({ price, bidRate }) {
    const { auctionId } = useParams()

    const { alert } = useContext(Context)

    const [bids, setBids] = useState()

    const loadAuctionBids = () => {

        try {
            retrieveAuctionBid(auctionId, sessionStorage.token, (error, bids) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setBids(bids.reverse())
            })
        } catch (error) {
            alert(error.message)
        }
    }

    

    useEffect(() => {
        loadAuctionBids()

        const intervalId = setInterval(() => {
           
            loadAuctionBids()
        }, 4000)
        return() => clearInterval(intervalId)

       
    }, [])

    

    const handleBid = event => {
        event.preventDefault()

        const amount = parseInt(event.target.amount.value)

        try {
            bidAuction(sessionStorage.token, auctionId, amount, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                loadAuctionBids()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    if (bids) {
        const maxBidAmount = bids.reduce((max, bid) => {
            return bid.amount > max ? bid.amount : max
        }, price)

        const nextBidAmount = maxBidAmount + bidRate

        return <Container className="mt-1 bg-gray-200 p-6  border-double border-4 rounded border-black max-h-96 overflow-y-scroll shadow-2xl " TagName="ul">
            <Container TagName="form" onSubmit={handleBid} className="mt-1">
                <h2><i>Live Auctions</i></h2>
                <input defaultValue={nextBidAmount} min={nextBidAmount} step={bidRate} className="px-4 py-2 rounded-full text-gray-900 bg-gray-300 focus:outline-none focus:shadow-outline" type="number" name="amount" />
                <Button type="submit" className="">Bid</Button>
            </Container>
            {bids.map((bid) => (
                <li key={bid.id} className="border-b border-gray-400 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Date: {new Date(bid.date).toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })}</p>
                            <p className="text-gray-500">Name: {bid.user.name}</p>
                            <p className="text-gray-500">Amount: {bid.amount}</p>
                        </div>
                       
                    </div>
                </li>
            ))}
           
        </Container>

    } else return <></>
}
export default BidList