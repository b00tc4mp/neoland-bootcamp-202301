import { useState } from "react"
import unregisterUser from "../logic/unregister-user"
import updateUserPassword from "../logic/update-user-password"

function Profile(props) {
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
        } catch (error) {
            setFeedback({
                message: '❌ ' + error.message,
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

                delete sessionStorage.userId
                props.onNavigateToLogin()
            })
        } catch (error) {
            alert(error.message)
        }
    }


    return <main className="h-screen flex flex-col items-center justify-center gap-8 font-['Montserrat']">
        <form onSubmit={handleChangePassword} className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="Current password">Current password</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="password" name="currentPassword" />

                <label htmlFor="New password">New password</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="password" name="newPassword" />

                <label htmlFor="New password repeat">Confirm new password</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="password" name="newPasswordRepeat" />
            </div>
            <button className="bg-purple-300 border-2 rounded-md text-white w-40 drop-shadow-sm" type="submit"> Update password</button>
        </form>
        <p className={"feedback feedback-" + feedback.type} > {feedback.message}</p> {/* pq se pone dos veces feedback? */}

        <form onSubmit={handleUnregisterUser} className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="Current password">Current password</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="password" name="currentPassword" />
            </div>
            <button className="bg-purple-300 border-2 rounded-md text-white w-40 drop-shadow-sm" type="submit">Unregister user</button>
        </form>

    </main>
}

export default Profile