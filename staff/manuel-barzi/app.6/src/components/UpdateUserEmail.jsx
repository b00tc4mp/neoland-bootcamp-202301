import { useState } from 'react'
import updateUserEmail from '../logic/update-user-email'
import Button from '../library/Button'
import Container from '../library/Container'

function UpdateUserEmail() {
    console.log('UpdateUserEmail -> render')

    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        const newEmail = event.target.newEmail.value
        const password = event.target.password.value

        try {
            updateUserEmail(sessionStorage.userId, newEmail, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        type: 'error'
                    })

                    return
                }

                event.target.reset()

                setFeedback({
                    message: 'email updated successfully',
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
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="email" name="newEmail" placeholder="new email" />
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="password" placeholder="password" />

            <Button type="submit">Update email</Button>
        </Container>

        <p className={`font-odibee ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
    </Container>
}

export default UpdateUserEmail