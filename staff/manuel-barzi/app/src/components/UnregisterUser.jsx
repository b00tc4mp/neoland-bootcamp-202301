import { useState } from 'react'
import unregisterUser from '../logic/unregister-user'
import Button from '../library/Button'
import Container from '../library/Container'

function UnregisterUser({ onUnregisterUser }) {
    console.log('UnregisterUser -> render')

    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        type: 'error'
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
                type: 'error'
            })
        }
    }

    return <Container>
        <Container TagName="form" onSubmit={handleSubmit}>
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="password" placeholder="password" />

            <Button type="submit">Unregister</Button>
        </Container>
        
        <p className={`font-odibee ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
    </Container>
}

export default UnregisterUser