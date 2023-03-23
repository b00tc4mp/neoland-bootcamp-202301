import { useState } from 'react'
import updateUserEmail from '../logic/update-user-email'
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'


function UpdateUserEmail() {

    const [feedback, setFeedback] = useState()
  

    const handleSubmit = event => {
        event.preventDefault()

        const newEmail = event.target.newEmail.value
        const password = event.target.password.value

        try {
            updateUserEmail(sessionStorage.token, newEmail, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        level: 'error'
                    })

                    return
                }

                event.target.reset()

                setFeedback({
                    message: 'email updated successfully',
                    level: 'success'
                })
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }
    return <Container>
        <h2 className='flex flex-col items-center underline decoration-double text-xl'>Change email</h2>
        <Container TagName='form' onSubmit={handleSubmit}>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="email" name="newEmail" placeholder="new email" />
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="password" placeholder="password" />
            <Button type="submit">Update email</Button>
        </Container>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>

}
export default UpdateUserEmail