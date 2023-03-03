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

    const handleSubmit = (event) => {
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
                // delete sessionStorage.userId
                // onNavigateToLogin()
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
    <Container TagName="form" onSubmit={handleSubmit} className="gap-4 bg-[#d1d5db] mt-10 p-3 rounded-lg">
    <legend className="text-xl">DELETE USER</legend>
      <input
        className="bg-[#d6d3d1] border-4 hover:border-[#facc15] "
        type="password"
        name="password"
        placeholder=" your password" />

      {/* <button className=" bg-[#facc15] h-7 w-40" type="submit">Delete user</button> */}
      <Button type="submit">Delete user</Button>
    </Container>

    <p className={`font-odibee ${feedback.type === 'success' ? "text-[#4ae84a]" : "text-[tomato]"}`}>{feedback.message}</p>
    </Container>
}
export default UnregisterUser