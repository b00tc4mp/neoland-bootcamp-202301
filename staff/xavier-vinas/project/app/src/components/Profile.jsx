import UpdateUserPassword from './UpdateUserPassword'
import UpdateUserEmail from './UpdateUserEmail'
import UnregisterUser from './UnregisterUser'
import Container from '../library/Container'
import { useNavigate } from 'react-router-dom'

import {  Link } from 'react-router-dom'

function Profile({ onUnregisterUser }) {


    return <Container className="sm: bg-slate-100 h-full">
        <UpdateUserPassword />
        <UpdateUserEmail />
        <UnregisterUser onUnregisterUser={onUnregisterUser} />
      
        <Link  to={"/new-auction"}>
            <p className=' border-double border-4  border-black' >Add auction</p>

        </Link>



    </Container>
      
}

export default Profile