import UpdateUserPassword from './UpdateUserPassword'
import UpdateUserEmail from './UpdateUserEmail'
import UnregisterUser from './UnregisterUser'
import Container from '../library/Container'

function Profile({onUnregisterUser}) {
    console.log('Profile -> render')

    return <Container className='gap-20 pt-8'>
        <UpdateUserPassword/>
        <UpdateUserEmail/>
        <UnregisterUser onUnregisterUser={onUnregisterUser}/>
    </Container> 
}

export default Profile