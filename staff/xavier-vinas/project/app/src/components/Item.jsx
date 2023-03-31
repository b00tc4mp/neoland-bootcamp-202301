import { Link } from 'react-router-dom'
import AuctionTimer from './AuctionTimer'

function Item({ element }) {
    return <Link to={`/auctions/${element.id}`} className="sm:">
        <li className="sm: bg-slate-100 flex flex-col py-4 px-6 my-4 rounded shadow-2xl font- 
         bold" key={element.id}>
            <div className="sm: mb-2 flex justify-between">
                <h2 className="sm: flex items-center text-lg font-medium mr-4 text-gray-600">{element.title}</h2>
            </div>
            <img className="sm: w-96 mb-2 rounded" src={element.photo} alt={element.title} />
            <div className="sm: flex justify-between">
                <p className="sm: text-gray-600 mb-2 font-bold">Price : {element.price} $</p>
                <p className=" sm: sm: text-gray-600 mb-2 font-bold">Status : <span className="font-bold">{element.status}</span></p>
            </div>
            <div className='sm: flex justify-between'>
                {element.status === 'open' &&
                    <p className='sm: text-gray-600 mb-2 font-bold'>Time left : </p>}   
                {element.status === 'open' &&
                    <span className='text-gray-600 mb-2 font-bold'> <AuctionTimer endDate={new Date(element.endDate)} /></span> }

            </div>
        </li>
    </Link>
}   

export default Item