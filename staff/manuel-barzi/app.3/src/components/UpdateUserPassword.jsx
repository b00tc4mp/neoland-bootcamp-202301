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
        const newPasswordConfirm = event.target.newPasswordConfirm.value

        try {
            updateUserPassword(sessionStorage.userId, currentPassword, newPassword, newPasswordConfirm, error => {
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
        <Container TagName="form" onSubmit={handleSubmit}>
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="currentPassword" placeholder="current password" />
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="newPassword" placeholder="new password" />
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="newPasswordConfirm" placeholder="confirm new password" />
            
            <Button type="submit">Update password</Button>
        </Container>

        <p className={`font-odibee ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
    </Container>
}

export default UpdateUserPassword