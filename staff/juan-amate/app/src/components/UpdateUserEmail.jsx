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
            <p className={`p-3 ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
        </Container>
    </Container>
}

export default UpdateUserEmail