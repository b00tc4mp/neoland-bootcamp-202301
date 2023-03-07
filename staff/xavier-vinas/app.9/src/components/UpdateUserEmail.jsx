import { useState } from 'react'
import updateUserEmail from '../logic/update-user-email'
import Button from '../library/Button'
import Container from '../library/Container'


function UpdateUserEmail() {
 
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
        <h2 className='flex flex-col items-center underline decoration-double text-xl'>Change email</h2>
        <Container TagName='form' onSubmit={handleSubmit}>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="email" name="newEmail" placeholder="new email" />
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" name="password" placeholder="password" />  
            <Button type="submit">Update email</Button>
        </Container>
        <p className={`font-odibee ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
    </Container>
    


}
export default UpdateUserEmail