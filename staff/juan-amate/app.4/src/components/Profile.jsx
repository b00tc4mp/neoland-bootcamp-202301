import { useState } from 'react'
import updateUserPassword from '../logic/update-user-password'

function Profile() {
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

    return <div className="profile-panel">
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
}

export default Profile