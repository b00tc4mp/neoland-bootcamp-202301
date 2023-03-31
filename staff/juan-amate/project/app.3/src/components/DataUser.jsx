import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../Context'
import retrieveUser from '../logic/retrieve-user'
import Container from "../library/Container"

function DataUser({ updateStamp }) {
    console.log('Item -> render')

    const { alert } = useContext(Context)

    const [user, setUser] = useState([])

    const loadUser = () => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadUser()
    }, [updateStamp])

    return <Container>
        <Link to='/profile' className={'flex flex-col w-80 justify-start gap-1 m-10 p-5 border border-neutral-500 rounded-3xl cursor-pointer'}>
            <p className='text-xs uppercase font-bold' >Name:</p>
            <p>{user.name}</p>
            <br></br>
            <p className='text-xs uppercase font-bold' >National id:</p>
            <p>{user.nationalId}</p>
            <br></br>
            <p className='text-xs uppercase font-bold' >Address:</p>
            <p>{user.address}</p>
            <br></br>
            <p className='text-xs uppercase font-bold' >Zip code:</p>
            <p>{user.zipCode}</p>
            <br></br>
            <p className='text-xs uppercase font-bold' >City:</p>
            <p>{user.city}</p>
            <br></br>
            <p className='text-xs uppercase font-bold' >Province:</p>
            <p>{user.province}</p>
            <br></br>
            <p className='text-xs uppercase font-bold' >Phone number:</p>
            <p>{user.phone}</p>
        </Link>
    </Container>
}

export default DataUser