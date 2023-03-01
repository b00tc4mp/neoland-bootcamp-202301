import { useState } from 'react'
import updateUserPassword from '../logic/update-user-password'
import unregisterUser from '../logic/unregister-user'
import updateUserEmail from '../logic/update-user-email'

function Profile({ onUnregisterUser }) {
    console.log('Profile -> render')

    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    })

    const handleChangePassword = event => {
        event.preventDefault()

        const currentPassword = event.target.currentPassword.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
            updateUserPassword(sessionStorage.userId, currentPassword, newPassword, newPasswordRepeat, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        type: 'error'
                    })

                    return
                }

                event.target.reset()

                setFeedback({
                    message: 'password updated successfully',
                    type: 'success'
                })
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                type: 'error'
            })
        }
    }

    const handleUnregisterUser = event => {
        event.preventDefault()

        const currentPassword = event.target.currentPassword.value

        try {
            unregisterUser(sessionStorage.userId, currentPassword, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onUnregisterUser()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleChangeEmail = event => {
        event.preventDefault()

        const currentEmail = event.target.currentEmail.value
        const newEmail = event.target.newEmail.value
        const newEmailRepeat = event.target.newEmailRepeat.value

        try {
            updateUserEmail(sessionStorage.userId, currentEmail, newEmail, newEmailRepeat, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        type: 'error'
                    })

                    return
                }

                event.target.reset()

                setFeedback({
                    message: 'email updated successfully',
                    type: 'success'
                })
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                type: 'error'
            })
        }
    }
}

return <div className="profile-panel">
    <div>
        <form className="flex flex-col items-center my-40" onSubmit={handleChangePassword}>
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic"
                type="password"
                name="currentPassword"
                placeholder="current password"
            />
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic"
                type="password"
                name="newPassword"
                placeholder="new password"
            />
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic"
                type="password"
                name="newPasswordRepeat"
                placeholder="confirm new password"
            />
            <button className="bg-blue-600 text-white font-semibold border border-gray-400 mt-5 p-2 rounded-md w-30" type="submit">Update password</button>
            <p className={"text-red-500 p-3 feedback-" + feedback.type}>{feedback.message}</p>
        </form>
    </div>

    <div>
        <form className="flex flex-col items-center my-40" onSubmit={handleChangeEmail}>
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic"
                type="email"
                name="currentEmail"
                placeholder="current email"
            />
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic"
                type="email"
                name="newEmail"
                placeholder="new email"
            />
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic"
                type="email"
                name="newEmailRepeat"
                placeholder="confirm new email"
            />
            <button className="bg-blue-600 text-white font-semibold border border-gray-400 mt-5 p-2 rounded-md w-30" type="submit">Update email</button>
            <p className={"text-red-500 p-3 feedback-" + feedback.type}>{feedback.message}</p>
        </form>
    </div>

    <div>
        <form className="flex flex-col items-center my-40" onSubmit={handleUnregisterUser}>
            {/* <label htmlFor="currentPassword">Current password</label> */}
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic"
                type="password"
                name="currentPassword"
                placeholder="current password"
            />
            <button className="bg-blue-600 text-white font-semibold border border-gray-400 mt-5 p-2 rounded-md w-30" type="submit">Unregister user</button>
            <p className={"text-red-500 p-3 feedback-" + feedback.type}>{feedback.message}</p>
        </form>
    </div>
</ div>

export default Profile