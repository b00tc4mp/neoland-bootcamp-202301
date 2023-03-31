import Container from '../library/Container'
import { Link } from 'react-router-dom'

function ItemContract({ element }) {
    console.log('ItemContract -> render')

    return <Container>
        <Link className={'flex flex-col w-80 justify-start gap-1 m-2 p-5 border border-neutral-500 rounded-3xl cursor-pointer'}>
            <p className="uppercase font-bold">Contract id:</p>
            <p>{element.id}</p>
            <br></br>
            <p className="uppercase font-bold">Event date:</p>
            <p>{element.eventDate}</p>
            <br></br>
            <p className="uppercase font-bold">Description service:</p>
            <p>{element.description}</p>
        </Link>
    </Container>
}

export default ItemContract