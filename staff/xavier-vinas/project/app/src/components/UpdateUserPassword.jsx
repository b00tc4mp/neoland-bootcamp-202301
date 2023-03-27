import { useState } from "react"
import updateUserPassword from "../logic/update-user-password"
import Container from '../library/Container'
import Button from '../library/Button'
import Feedback from './Feedback'



function UpdateUserPassword() {

    const [feedback, setFeedback] = useState()



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
                        level: 'error'
                    })

                    return
                }

                event.target.reset()

                setFeedback({
                    message: 'password updated successfully',
                    level: 'success'
                })
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }

    return <Container className=" shadow-2xl">
        <h2 className="text-xl">Update password</h2>
        <Container TagName="form" onSubmit={handleSubmit}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="password" name="currentPassword" placeholder="current password" />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="password" name="newPassword" placeholder="new password" />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="password" name="newPasswordConfirm" placeholder="confirm new password" />
            <Button type="submit">Update password</Button>
        </Container>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>
}

export default UpdateUserPassword