import UpdateUserPassword from './UpdateUserPassword'
import UpdateUserEmail from './UpdateUserEmail'
import UnregisterUser from './UnregisterUser'

function Profile({onUnregisterUser}) {
    console.log('Profile -> render')

    return <div className="flex flex-col items-center gap-5">
        <UpdateUserPassword />
        <UpdateUserEmail />
        <UnregisterUser onUnregisterUser={onUnregisterUser} />
    </div>
}

export default Profile