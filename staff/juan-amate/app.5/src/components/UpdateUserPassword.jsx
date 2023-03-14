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
            updateUserPassword(sessionStorage.userId, currentPassword, newPassword, newPasswordRepeat, error => {
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

    return <Container>
        <Container TagName='form' onSubmit={handleSubmit}>
            <label className='mb-1 p-2'>Update your password</label>
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic outline-gray-500"
                type="password"
                name="currentPassword"
                placeholder="current password"
            />
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic outline-gray-500"
                type="password"
                name="newPassword"
                placeholder="new password"
            />
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic outline-gray-500"
                type="password"
                name="newPasswordRepeat"
                placeholder="confirm new password"
            />
            <Button type="submit">Update password</Button>
            <p className={`p-3 ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
        </Container>
    </Container>
}

export default UpdateUserPassword