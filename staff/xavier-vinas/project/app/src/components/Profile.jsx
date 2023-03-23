import UpdateUserPassword from './UpdateUserPassword'
import UpdateUserEmail from './UpdateUserEmail'
import UnregisterUser from './UnregisterUser'
import Container from '../library/Container'
import { useNavigate } from 'react-router-dom'
import Button from '../library/Button'
import {  Link } from 'react-router-dom'

function Profile({ onUnregisterUser }) {
    const navigate = useNavigate()
    const handleLogout = () => {
        delete sessionStorage.token

        navigate('/login')
    }


    return <Container className="p-10 h-10">
        <UpdateUserPassword />
        <UpdateUserEmail />
        <UnregisterUser onUnregisterUser={onUnregisterUser} />
        <Container>
            <Button className="" onClick={handleLogout}>Logout</Button>
        </Container>
        <Link to={"/new-auction"}>
            add

        </Link>



    </Container>
      
}

export default Profile