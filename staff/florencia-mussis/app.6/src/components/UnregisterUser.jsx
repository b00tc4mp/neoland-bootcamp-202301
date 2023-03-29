import { useState } from 'react'
import unregisterUser from '../logic/unregister-user'
import Button from '../library/Button'
import Container from '../library/Container'

function UnregisterUser({ onUnregisterUser }) {
    console.log('unregisterUser -> render')

    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value

        try {
            unregisterUser(sessionStorage.userId, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        type: 'error'
                    })

                    return
                }

                event.target.reset()

                delete sessionStorage.userId

                onUnregisterUser()
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                type: 'error'
            })
        }
    }

    return <Container>
        <Container TagName="form"  onSubmit={handleSubmit} className="justify-center gap-6">
             <Container>
                <label htmlFor="password">Password</label>
                <input className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" type="password" name="password" />
            </Container>
            <Button type="submit">Unregister</Button>
        </Container>
        <p className={"feedback feedback-" + feedback.type} > {feedback.message}</p>
    </Container>
}

export default UnregisterUser