import { useState } from 'react'
import updateUserEmail from '../logic/update-user-email'
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'

function UpdateUserEmail() {
    console.log('updateUserEmail -> render')

    const [feedback, setFeedback] = useState()

    const handleSubmit = event => {
        event.preventDefault()

        const newEmail = event.target.newEmail.value
        const password = event.target.password.value

        try {
            updateUserEmail(sessionStorage.token, newEmail, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        level: 'error'
                    })

                    return
                }

                event.target.reset()

                setFeedback({
                    message: 'email updated successfully',
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

    return <Container className="justify-center gap-8 font-['Montserrat']r">
        <Container TagName="form" onSubmit={handleSubmit} className="justify-center gap-6">
            <Container>
                <label htmlFor="New email">New email</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="email" name="newEmail" />

                <label htmlFor="password">Password</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="password" name="password" />
            </Container>
            <Button type="submit">Update email</Button>
        </Container>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>
}

export default UpdateUserEmail