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
        const newPasswordConfirm = event.target.newPasswordConfirm.value

        try {
            updateUserPassword(sessionStorage.userId, currentPassword, newPassword, newPasswordConfirm, error => {
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

    return <div className="flex flex-col items-center">
        <form onSubmit={handleChangePassword} className="update-password-panel flex flex-col gap-2">
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="currentPassword" placeholder="current password" />
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="newPassword" placeholder="new password" />
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="newPasswordConfirm" placeholder="confirm new password" />
            <button type="submit" className="logout-button font-press border-[2px] border-[gold] text-[gold] p-1">Update password</button>
        </form>
        <p className={"feedback feedback-" + feedback.type}>{feedback.message}</p>
    </div>
}

export default Profile