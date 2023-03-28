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
                    message: '✅ E-mail updated successfully',
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

    return <Container className="justify-center gap-8 font-['Montserrat']">
        <Container TagName="form" onSubmit={handleSubmit} className="justify-center gap-6">
            <Container className="gap-4">
                <input className="border-2 rounded-md w-56 h-8  focus:outline-teal-500" type="email" name="newEmail" placeholder="New e-mail" />

                <input className="text-lg border-2 rounded-md w-56 h-8 focus:outline-teal-500" type="password" name="password" placeholder="Password"/>
            </Container>
            <Button type="submit" className="w-40">Update email</Button>
        </Container>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>
}

export default UpdateUserEmail