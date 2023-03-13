import { useState } from "react"
import updateUserPassword from "../logic/update-user-password"

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
                    message: '✅ Password updated successfully',
                    type: 'success'
                })
            })
        } catch (error){
            setFeedback({
                message: '❌ ' + error.message,
                type: 'error'
            })
        }
    }

    return <div className="profile-panel h-screen">
        <form onSubmit = {handleChangePassword} className="update-password-panel h-full flex flex-col justify-center aling-center">
            <input type="password" name="currentPassword" placeholder="Current password" />
            <input type="password" name="newPassword" placeholder="New password" />
            <input type="password" name="newPasswordRepeat" placeholder="Confirm new password" />
            <button className="update-password" type="submit"> Update password</button>
        </form>
         <p className={"feedback feedback-" + feedback.type} > {feedback.message}</p> {/* pq se pone dos veces feedback? */}
    </div>
}

export default Profile