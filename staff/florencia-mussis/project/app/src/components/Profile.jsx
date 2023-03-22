import UpdateUserPassword from './UpdateUserPassword'
import UpdateUserEmail from './UpdateUserEmail'
import UnregisterUser from './UnregisterUser'
import Container from '../library/Container'

function Profile({onUnregisterUser}) {
    console.log('Profile -> render')

    return <Container className='py-14 gap-20'>
        <UpdateUserPassword/>
        <UpdateUserEmail/>
        <UnregisterUser onUnregisterUser={onUnregisterUser}/>
    </Container> 
}

export default Profile