import { useState } from "react"
import updateUserEmail from '../logic/update-user-email'
import Container from '../library/Container'
import Button from '../library/Button'
import Feedback from "./Feedback"

function UpdateUserEmail() {
    console.log('UpdateUserEmail -> render')

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

    return <Container TagName="form" onSubmit={handleSubmit}>
        <section className='w-screen'>
            <div>
                <h2 className='m-1 text-xl font-roboto'>Update your email</h2>

                <input type='email' id='email' placeholder='Actual email' />

                <input type='email' id='newEmail' placeholder='New email' />

                <input type='password' id='password' placeholder='Actual password' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                <Button type="submit">Update email</Button>

                {feedback && <Feedback message={feedback.message} level={feedback.level} />}
            </div >
        </section >
    </Container >
}

export default UpdateUserEmail