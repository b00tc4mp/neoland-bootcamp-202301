import { useState } from 'react'
import updateUserPassword from '../logic/update-user-password'
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'

function UpdateUserPassword() {
    console.log('UpdateUserPassword -> render')

    const [feedback, setFeedback] = useState()

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
                        level: 'error'
                    })

                    return
                }

                event.target.reset()

                setFeedback({
                    message: '✅ Password updated successfully',
                    level: 'success'
                })
            })
        } catch (error) {
            setFeedback({
                message: '❌ ' + error.message,
                level: 'error'
            })
        }
    }


    return <Container className="justify-center gap-8 font-['Montserrat']">
        <Container TagName="form" onSubmit={handleSubmit} className="justify-center gap-6">
            <Container className="gap-3">
                
                <input className="border-2 rounded-md w-56  focus:outline-teal-500" type="password" name="currentPassword" placeholder ="Current password"/>

                <input className="border-2 rounded-md w-56  focus:outline-teal-500" type="password" name="newPassword" placeholder ="New password" />

                <input className="border-2 rounded-md w-56  focus:outline-teal-500" type="password" name="newPasswordRepeat"  placeholder ="Confirm new password" />
            </Container>
            <Button type="submit" className="w-40">Update password</Button>
        </Container>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>
}

export default UpdateUserPassword