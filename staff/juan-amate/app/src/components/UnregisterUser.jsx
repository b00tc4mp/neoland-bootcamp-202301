import { useState } from 'react'
import unregisterUser from '../logic/unregister-user'
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'

function UnregisterUser({ onUnregisterUser }) {
    console.log('UnregisterUser -> render')

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

                delete sessionStorage.userId

                onUnregisterUser()
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }

    return <Container>
        <Container TagName="form" onSubmit={handleSubmit}>
            <label className='mb-1 p-2'>Eliminate my profile</label>
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic outline-gray-500"
                type="password"
                name="password"
                placeholder="password"
            />
            <Button type="submit">Unregister</Button>
        </Container>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>
}

export default UnregisterUser