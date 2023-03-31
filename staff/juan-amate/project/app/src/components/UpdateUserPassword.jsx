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

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
            updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat)
                .then(() => {
                    event.target.reset()

                    setFeedback({
                        message: 'password updated successfully',
                        level: 'success'
                    })
                })
                .catch(error => setFeedback({
                    message: error.message,
                    level: 'error'
                }))
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }

    return <Container TagName='form' onSubmit={handleSubmit} className='w-screen mt-56'>
        <div className='w-4/5'>
            <h2 className='m-3 p-2 text-xl font-roboto'>Update your password</h2>
            <input type='password' id='password' placeholder='Actual password' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <input type='password' id='newPassword' placeholder='New password' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <input type='password' id='newPasswordRepeat' placeholder='Repeat new password' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <Button className='p-9' type='submit'>Change password</Button>
            {feedback && <Feedback message={feedback.message} level={feedback.level} />}
        </div>
    </Container >
}

export default UpdateUserPassword