import { useState } from "react"
import updateUserPassword from "../logic/update-user-password"
import Container from '../library/Container'
import Button from '../library/Button'



function UpdateUserPassword() {

    const [feedback, setFeedback] = useState({
        message: "",
        type: ""
    })

    const handleSubmit = event => {
        event.preventDefault()

        const currentPassword = event.target.currentPassword.value
        const newPassword = event.target.newPassword.value
        const newPasswordConfirm = event.target.newPasswordConfirm.value

        try {
            updateUserPassword(sessionStorage.token, currentPassword, newPassword, newPasswordConfirm, error => {
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

    return <Container className="mx-12 bg-neutral-300 ">
        <h2 className="flex flex-col items-center underline decoration-double text-xl">Update password</h2>
        <Container TagName="form" onSubmit={handleSubmit}>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="currentPassword" placeholder="current password" />
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="newPassword" placeholder="new password" />
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="newPasswordConfirm" placeholder="confirm new password" />
            <Button type="submit">Update password</Button>
        </Container>
        <p className={`font-odibee ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
    </Container>
}

export default UpdateUserPassword