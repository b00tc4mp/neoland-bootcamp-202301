import { useState, useRef } from 'react'
import unregisterUser from '../logic/unregister-user'
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'
import Confirm from './Confirm'

function UnregisterUser({ onUnregisterUser }) {
    console.log('unregisterUser -> render')

    const [feedback, setFeedback] = useState()

    const passwordRef = useRef(null)

    const [unregisterUserConfirmOn, setUnregisterUserConfirmOn] = useState(false)

    const handleUnregisterUser = (event) => {
        event.preventDefault()
        setUnregisterUserConfirmOn(true)
    }


    const handleAcceptDeleteAccount = () => {

        const password = passwordRef.current.value

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        level: 'error'
                    })

                    return
                }

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

    const handleCancelDeleteAccount = () => {
        setUnregisterUserConfirmOn(false)
    }

    return <Container>
        <Container TagName="form" onSubmit={handleUnregisterUser} className="justify-center gap-6">
            
                <input ref={passwordRef} className="text-lg border-2 rounded-md w-56 h-8 focus:outline-teal-500" type="password" name="password" placeholder="Password" />
            
            <Button type="submit" className="w-40">Unregister</Button>
        </Container>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}

        {unregisterUserConfirmOn && <Confirm message= "Do you want to delete your account?" onAccept={handleAcceptDeleteAccount} onCancel={handleCancelDeleteAccount} />}
    </Container>
}
export default UnregisterUser