import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import Container from "../library/Container"
import Context from '../Context'
import retrieveAuction from "../logic/retrieve-auction"
import BidList from "./BidList"




function AuctionDetail({}) {

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

    


    return <Container className="bg-gray-200 rounded-lg shadow-md p-6" TagName="ul">
        <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-medium mr-4">{auction.title}</h2>
        </div>
        <img className="w-full h-64 object-cover mb-2 rounded" src={auction.photo} alt={auction.title} />
        <div>
            <p className="text-lg leading-7 text-gray-600">{auction.description}</p>
        </div>
        <Container className="mt-4">
            <div className=" gap-20">
                <p className="text-gray-600">Bid Rate:<span className="font-medium"> {auction.bidRate} $</span></p>
                <p className="text-gray-600">Price: <span className="font-medium">{auction.price} $</span> </p>
            </div>
            <div className=" border-b border-gray-400 pb-2">
                <p className="text-gray-600">Start date: <span className="font-medium">{new Date(auction.startDate).toLocaleString()}</span></p>
                <p className="text-gray-600">End date: <span className="font-medium">{new Date(auction.endDate).toLocaleString()}</span></p>
                <p className=" text-gray-600">Status: <span className="font-medium">{auction.status}</span></p>
                <p className=" text-gray-600">User status: <span className="font-medium">{auction.userStatus}</span></p>
            </div>
        </Container>
        <Container className="mt-4">
            <BidList price={auction.price} bidRate={auction.bidRate} />
        </Container>
    </Container>




}
export default AuctionDetail