import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import Container from "../library/Container"
import Context from '../Context'
import retrieveAuction from "../logic/retrieve-auction"
import BidList from "./BidList"




function AuctionDetail({ }) {

    const { auctionId } = useParams()

    const { alert } = useContext(Context)

    const [auction, setAuction] = useState([])


    const loadAuction = () => {


        try {
            retrieveAuction(sessionStorage.token , auctionId)
                .then(auction => {
                    setAuction(auction)

                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)


        }


    }







    //     try {
    //         retrieveAuction(sessionStorage.token, auctionId, (error, auction) => {
    //             if (error) {
    //                 alert(error.message)

    //                 return
    //             }

    //             setAuction(auction)
    //         })
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    useEffect(() => {
        loadAuction()
    }, [])




    return <Container className="font-['Montserrat'] sm: bg-gray-200 rounded-lg shadow-md p-6">
        <div className="sm: flex justify-between items-start mb-2">
            <h2 className="sm: text-xl font-medium mr-4">{auction.title}</h2>
        </div>
        <img className="rounded-md sm: w-full h-64 object-cover mb-2 overflow-y-scroll shadow-2xl " src={auction.photo} alt={auction.title} />
        <div>
            <p className="sm: text-lg text-gray-600 shadow-inner p-2 rounded">{auction.description}</p>
        </div>
        <Container className="sm: ">
            <div className="sm: mb-2  ">
                <p className="sm: text-black">Price: <span className="font-medium text-gray-600">{auction.price} $</span> </p>
                <p className="sm: text-black">Bid Rate:<span className="font-medium text-gray-600"> {auction.bidRate} $</span></p>
            </div>
            <div className="sm: border-b border-gray-400 pb-2 ">
                <p className="sm: text-black">Start date: <span className="font-medium text-gray-600">{new Date(auction.startDate).toLocaleString()}</span></p>
                <p className="sm: text-black">End date: <span className="font-medium text-gray-600">{new Date(auction.endDate).toLocaleString()}</span></p>
                <p className=" sm: text-black">Status: <span className="font-medium text-gray-600">{auction.status}</span></p>
                {auction.userStatus === 'won' || auction.userStatus === 'winning' ? (
                    <p className="sm:text-black ">User status:
                        <span className={`text-lg ${auction.userStatus === 'winning' ? 'text-green-600' : 'text-orange-600'}`}>
                            {auction.userStatus}
                        </span>
                    </p>
                ) : null}   
            </div>
        </Container>
        {auction.status === 'open' &&
            <BidList price={auction.price} bidRate={auction.bidRate} status={auction.status} />
    }
        
    </Container>




}
export default AuctionDetail 