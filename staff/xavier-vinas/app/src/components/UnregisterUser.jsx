import { useState } from 'react'
import Container from '../library/Container'
import unregisterUser from '../logic/unregister-user'
import Button from "../library/Button"
import Feedback from './Feedback'


function UnregisterUser({ onUnregisterUser }) {

    const [feedback, setFeedback] = useState()
 

    const handleSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        level: 'error'
                    })

                    return
                }

                event.target.reset()

                delete sessionStorage.token

                onUnregisterUser()
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
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
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>
}

export default UnregisterUser
