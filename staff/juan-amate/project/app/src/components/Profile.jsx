import Container from '../library/Container'
import DataUser from './DataUser'

function Profile() {
    console.log('Profile -> render')

    return <Container>
        <DataUser />
    </Container>
}

export default Profile
