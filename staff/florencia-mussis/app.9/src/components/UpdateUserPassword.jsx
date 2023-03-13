import { useState } from 'react'
import updateUserPassword from '../logic/update-user-password'
import Button from '../library/Button'
import Container from '../library/Container'

function UpdateUserPassword() {
    console.log('UpdateUserPassword -> render')

    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        const currentPassword = event.target.currentPassword.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
            updateUserPassword(sessionStorage.token, currentPassword, newPassword, newPasswordRepeat, error => {
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


    return <Container className="justify-center gap-8 font-['Montserrat']">
        <Container TagName="form" onSubmit={handleSubmit} className="justify-center gap-6">
            <Container>
                <label htmlFor="Current password">Current password</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="password" name="currentPassword" />

                <label htmlFor="New password">New password</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="password" name="newPassword" />

                <label htmlFor="New password repeat">Confirm new password</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="password" name="newPasswordRepeat" />
            </Container>
            <Button type="submit">Update password</Button>
        </Container>
        <p className={"feedback feedback-" + feedback.type} > {feedback.message}</p> {/* pq se pone dos veces feedback? */}
    </Container>
}

export default UpdateUserPassword