import { Link } from 'react-router-dom'

function Item({ element   }) {
  

  

    return <Link to={`/auction-detail/${element.id}`}>
        <li className="bg-slate-100 flex flex-col py-4 px-6 my-4" key={element.id}>
            <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-medium mr-4">{element.title}</h2>
            </div>
            <img className="w-full h-64 object-cover mb-2" src={element.photo} alt={element.title} />
            <div className="flex justify-between items-end">
                <p className="text-gray-600 mb-2">{element.price}</p>
            </div>
        </li>
   
    </Link>

}
export default Item