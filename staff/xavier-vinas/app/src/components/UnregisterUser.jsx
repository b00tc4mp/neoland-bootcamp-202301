import { useState } from 'react'
import Container from '../library/Container'
import unregisterUser from '../logic/unregister-user'
import Button from "../library/Button"


function UnregisterUser({ onUnregisterUser }) {

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
    return <Container >
        <Container  >
        <h2 className="flex flex-col items-center underline decoration-double text-xl">Delete Account</h2>
            <Container TagName='form' onSubmit={handleSubmit}>
                <input className="shadow-lg shadow-black p-1 rounded-full mb-3" type="password" name="password" placeholder="your password" />
                <Button type="submit">Unregister</Button>
            </Container>
        </Container>
        <p className={"feedback feedback-" + feedback.type}>{feedback.message}</p>
    </Container>
}

export default UnregisterUser
