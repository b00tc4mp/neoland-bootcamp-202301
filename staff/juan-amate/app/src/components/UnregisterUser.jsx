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
        <Container TagName="form" onSubmit={handleSubmit}>
            <label className='mb-1 p-2'>Eliminate my profile</label>
            <input className="bg-white border border-black mb-1 p-2 rounded-md text-gray-500 text-sm italic outline-gray-500"
                type="password"
                name="password"
                placeholder="password"
            />
            <Button type="submit">Unregister</Button>
            <p className={`p-3 ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
        </Container>
    </Container>
}

export default UnregisterUser