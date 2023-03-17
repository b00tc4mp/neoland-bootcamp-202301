import Container from '../library/Container'
import { Link } from 'react-router-dom'

function ItemContract({ element }) {
    console.log('ItemContract -> render')

    const eventDate = new Date(element.eventDate).toLocaleDateString()

    return <Container>
        {element &&
            <Link className={'flex flex-col w-80 justify-start gap-1 m-2 p-5 border border-neutral-500 rounded-3xl cursor-pointer'}>
                <p className="uppercase font-bold">Event date:</p>
                <p className='ml-3'>{eventDate}</p>
                <br></br>

                <p className="uppercase font-bold">Couple´s names:</p>
                <p className='ml-3'>{element.user.name}</p>
                <p className='ml-3'>{element.coupleName}</p>
                <br></br>

                <p className="uppercase font-bold">Incluided services:</p>
                <ul>{element.services?.map(item => {
                    return <li key={item.id} className='list-disc ml-5'>{item.name}</li>
                })}</ul>
                <br></br>

                <p className="uppercase font-bold">Total price:</p>

                <p className='ml-3'>{element.services?.reduce((acc, item) => acc + item.price, 0)} euros</p>
            </Link>
        }
    </Container>
}

export default ItemContract