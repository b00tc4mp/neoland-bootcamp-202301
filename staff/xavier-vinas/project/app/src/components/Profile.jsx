import UpdateUserPassword from './UpdateUserPassword'
import UpdateUserEmail from './UpdateUserEmail'
import UnregisterUser from './UnregisterUser'
import Container from '../library/Container'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

function Profile({ onUnregisterUser, user }) {


    return <Container className="sm: bg-slate-200 h-full">
        <UpdateUserPassword />
        <UpdateUserEmail />
        <UnregisterUser onUnregisterUser={onUnregisterUser} />

        {user.role === 'admin' && <Link to={"/new-auction"}>
            <p className=' border-double border-4 rounded  border-gray-600' >Add auction</p>

        </Link>}



    </Container>

}

export default Profile