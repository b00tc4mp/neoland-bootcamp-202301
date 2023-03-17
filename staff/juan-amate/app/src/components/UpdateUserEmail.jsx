import { useState } from 'react'
import updateUserEmail from '../logic/update-user-email'
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'

function UpdateUserEmail() {
    console.log('UpdateUserEmail -> render')

    const [feedback, setFeedback] = useState()

    const handleSubmit = event => {
        event.preventDefault()

        const newEmail = event.target.newEmail.value
        const password = event.target.password.value

        try {
            updateUserEmail(sessionStorage.userId, newEmail, password, error => {
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

    return <Container>
        <Container TagName='form' onSubmit={handleSubmit}>
            <label className='mb-1 p-2'>Update your email</label>

            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic outline-gray-500"
                type="email"
                name="newEmail"
                placeholder="new email"
            />
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic outline-gray-500"
                type="password"
                name="password"
                placeholder="password"
            />
            <Button type="submit">Update email</Button>
        </Container>

        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>
}

export default UpdateUserEmail