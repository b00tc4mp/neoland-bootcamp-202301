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
            <h2 className="text-xl">Delete Account</h2>
            <Container TagName='form' onSubmit={handleSubmit}>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" placeholder="your password" />
                <Button type="submit">Unregister</Button>
            </Container>
        </Container>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>
}

export default UnregisterUser
