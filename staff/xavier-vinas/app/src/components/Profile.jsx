import { useState } from "react"
import updateUserPassword from "../logic/update-user-password"

function Profile() {

    const [feedback, setFeedback] = useState({
        message: "",
        type: ""
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
                        type: "error"
                    })
                    return
                }
                event.target.reset()
                setFeedback({
                    message: "pasword updated successfully",
                    type: "success"
                })
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                type: "error"
            })
        }
    }

    return <div className="mx-12 bg-neutral-300   ">
        <form className="py-10 gap-5 rounded-lg border-double border-4 border-neutral-400  flex flex-col items-center" onSubmit={handleChangePassword}>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="currentPassword" placeholder="current password" />
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="newPassword" placeholder="new password" />
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="newPasswordConfirm" placeholder="confirm new password" />
            <button type="submit">Update password</button>
        </form>
        <p className={"feedback feedback-" + feedback.type}>{feedback.message}</p>
    </div>
}
export default Profile